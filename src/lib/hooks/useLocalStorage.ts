import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const useLocalStorage = <T>(
	key: string,
	initialState: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(initialState);
	const firstRender = useRef(true);

	useEffect(() => {
		const json = localStorage.getItem(key);
		if (!json) return;

		const valueStored = parseJSON<T>(json);
		if (!valueStored) return;

		setValue(valueStored);
	}, [key]);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;

const parseJSON = <T>(value: string | null): T | undefined => {
	try {
		return value === "undefined" ? undefined : JSON.parse(value ?? "");
	} catch (error) {
		if (process.env.NODE_ENV === "development") console.error(error);
		return undefined;
	}
};
