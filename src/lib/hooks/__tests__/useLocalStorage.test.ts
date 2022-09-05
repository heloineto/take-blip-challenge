import { act, renderHook } from "@testing-library/react";

import useLocalStorage, { parseJSON } from "../useLocalStorage";

class LocalStorageMock {
	store: Record<string, unknown> = {};

	clear() {
		this.store = {};
	}

	getItem(key: string) {
		return this.store[key] || null;
	}

	setItem(key: string, value: unknown) {
		this.store[key] = String(value);
	}

	removeItem(key: string) {
		delete this.store[key];
	}
}

Object.defineProperty(window, "localStorage", {
	value: new LocalStorageMock(),
});

describe("useLocalStorage", () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("initial state is in the returned state", () => {
		const { result } = renderHook(() => useLocalStorage("key", "value"));

		expect(result.current[0]).toBe("value");
	});

	test("initial state is a callback function", () => {
		const { result } = renderHook(() => useLocalStorage("key", () => "value"));

		expect(result.current[0]).toBe("value");
	});

	test("initial state is an array", () => {
		const { result } = renderHook(() => useLocalStorage("digits", [1, 2]));

		expect(result.current[0]).toEqual([1, 2]);
	});

	test("initial state is an undefined", () => {
		const { result } = renderHook(() => useLocalStorage("digits", undefined));

		expect(result.current[0]).toBeUndefined();
	});

	test("update the state", () => {
		const { result } = renderHook(() => useLocalStorage("key", "value"));

		act(() => {
			const setState = result.current[1];
			setState("edited");
		});

		expect(result.current[0]).toBe("edited");
	});

	test("update the state writes localStorage", () => {
		const { result } = renderHook(() => useLocalStorage("key", "value"));

		act(() => {
			const setState = result.current[1];
			setState("edited");
		});

		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
	});

	test("update the state with undefined", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | undefined>("key", "value")
		);

		act(() => {
			const setState = result.current[1];
			setState(undefined);
		});

		expect(result.current[0]).toBeUndefined();
	});

	test("update the state with null", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | null>("key", "value")
		);

		act(() => {
			const setState = result.current[1];
			setState(null);
		});

		expect(result.current[0]).toBeNull();
	});

	test("update the state with a callback function", () => {
		const { result } = renderHook(() => useLocalStorage("count", 2));

		act(() => {
			const setState = result.current[1];
			setState((prev) => prev + 1);
		});

		expect(result.current[0]).toBe(3);
		expect(window.localStorage.getItem("count")).toEqual("3");
	});

	test("setValue is referentially stable", () => {
		const { result } = renderHook(() => useLocalStorage("count", 1));

		const originalCallback = result.current[1];

		act(() => {
			const setState = result.current[1];
			setState((prev) => prev + 1);
		});

		expect(result.current[1] === originalCallback).toBe(true);
	});
});

describe("parseJSON", () => {
	it('returns `undefined` if value is `"undefined"`', () => {
		const parsed = parseJSON("undefined");

		expect(parsed).toBeUndefined();
	});

	it("returns `undefined` if value is such that `JSON.parse` would throw an error", () => {
		const parsed = parseJSON("this is not a valid JSON");

		expect(parsed).toBeUndefined();
	});
});
