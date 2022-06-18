
interface PropTypes {
	children: React.ReactNode;
};

export const AppPanel = ({children}:PropTypes) => {
	return ( <div className = "app-panel"> {children} </div>)
}
export const HeadPanel = ({children}:PropTypes) => {
	return ( <div className = "head-panel"> {children} </div>)
}
export const MiddlePanel = ({children}:PropTypes) => {
	return ( <div className = "middle-panel"> {children} </div>)
}
export const SidePanel = ({children}:PropTypes) => {
	return ( <div className = "side-panel"> {children} </div>)
}
export const MainPanel = ({children}:PropTypes) => {
	return ( <div className = "main-panel"> {children} </div>)
}
export const ComponentPanel = ({children}:PropTypes) => {
	return ( <div className = "component-panel"> {children} </div>)
}
export const FooterPanel = ({children}:PropTypes) => {
	return ( <div className = "footer-panel"> {children} </div>)
}
export const FlexPanel = ({children}:PropTypes) => {
	return ( <div className = "flex-panel"> {children} </div>)
}
export const FullPanel = ({children}:PropTypes) => {
	return ( <div className = "full-panel"> {children} </div>)
}
export const SubFullPanel = ({children}:PropTypes) => {
	return ( <div className = "subfull-panel"> {children} </div>)
}
export const LFloatPanel = ({children}:PropTypes) => {
	return ( <div className = "lfloat-panel"> {children} </div>)
}
export const RFloatPanel = ({children}:PropTypes) => {
	return ( <div className = "rfloat-panel"> {children} </div>)
}
export const RelativePanel = ({children}:PropTypes) => {
	return ( <div className = "relative-panel"> {children} </div>)
}
export const TrayPanel = ({children}:PropTypes) => {
	return ( <div className = "tray-panel"> {children} </div>)
}
export const CenterPanel = ({children}:PropTypes) => {
	return ( <div className = "center-panel"> {children} </div>)
}

