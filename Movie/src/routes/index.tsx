import { ButtonTest } from "../container/TestPage/ButtonTest";
import { CheckTest }  from "../container/TestPage/CheckTest";
import { InputTest }  from "../container/TestPage/InputTest";
import { ComponentTest }  from "../container/TestPage/ComponentTest";

export const appRoute = [
	{ id: 'ButtonTest',	path: "/TestPage/ButtonTest", exact: true, component: ButtonTest },
	{ id: 'CheckTest',	path: "/TestPage/CheckTest" , exact: true, component: CheckTest },
	{ id: 'InputTest',	path: "/TestPage/InputTest" , exact: true, component: InputTest },
	{ id: 'ComponentTest',	path: "/TestPage/ComponentTest" , exact: true, component: ComponentTest },
];