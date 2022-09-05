import type { ComponentProps } from "react";

const User = (props: ComponentProps<"svg">) => {
	return (
		<svg
			width={40}
			height={40}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.778 19.083a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334zm0-11.11a4.445 4.445 0 11-4.445 4.444 4.445 4.445 0 014.445-4.434v-.01zm11.139 20.46l-3.006 2.828-1.111-1.017a1.113 1.113 0 00-1.511 1.634l1.855 1.722c.206.19.476.295.756.294.283 0 .555-.106.761-.3l3.783-3.544a1.113 1.113 0 00-1.527-1.617zm-4.334-5.639a7.855 7.855 0 11-4.517 11.45H8.384a2.123 2.123 0 01-2.116-2.122v-1.85a9.444 9.444 0 019.444-9.444h2.128a9.445 9.445 0 015.744 1.966zm-3.835 2.602c.024-.034.048-.067.074-.096.111-.128.223-.25.345-.378l.25-.255.316-.295.39-.305.166-.14a7.138 7.138 0 00-3.445-.883h-2.127a7.223 7.223 0 00-7.223 7.223v1.744h9.678a7.252 7.252 0 01-.116-.694v-.15a7.69 7.69 0 01.006-1.717c.005-.052.01-.082.018-.122.008-.04.017-.091.031-.19.028-.194.067-.427.095-.555.016-.075.035-.14.055-.21.014-.049.029-.1.045-.162a5.8 5.8 0 01.133-.433c.034-.107.078-.22.117-.32l.033-.086c.043-.111.08-.193.142-.326l.008-.018c.067-.145.178-.378.211-.44a1.81 1.81 0 01.066-.108l.04-.063c.187-.333.4-.65.639-.95l.052-.07zm3.082 9.665a5.645 5.645 0 003.042.895l-.072.038a5.641 5.641 0 005.54-6.7 5.64 5.64 0 00-7.623-4.177c-.105.038-.202.084-.302.132l-.048.023-.078.034-.306.166-.139.084-.244.155-.367.272-.066.067c-.113.09-.22.187-.323.289l-.06.061c-.112.111-.217.233-.323.356a5.657 5.657 0 00-.6.889c-.078.15-.15.3-.216.455v.044a5.49 5.49 0 00-.312 1 .872.872 0 010 .117 3.163 3.163 0 01-.023.122c-.02.09-.038.18-.038.273V30.967a5.644 5.644 0 002.557 4.094z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default User;
