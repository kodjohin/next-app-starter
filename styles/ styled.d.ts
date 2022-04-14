// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		value: string;
		body: string;
		fontColor: string;
		backgroundImage: string;
	}
}
