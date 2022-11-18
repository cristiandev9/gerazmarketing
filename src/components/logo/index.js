import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { objLogo } from "./objLogo";

const Logo  = () => {
    return (
        <>
        <StaticImage src={objLogo} alt="logo" width={48} />
        </>
    )
}

export default Logo;