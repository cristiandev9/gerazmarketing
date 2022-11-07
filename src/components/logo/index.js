import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo  = () => {
    return (
        <>
        <StaticImage src="../../images/logo.png" alt="logo" width={48} />
        </>
    )
}

export default Logo;