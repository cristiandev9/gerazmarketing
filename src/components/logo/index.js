import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { objLogo } from "./objLogo";

const Logo  = () => {
    return (
        <>
        <StaticImage src="https://gerazmarketing.s3.sa-east-1.amazonaws.com/images/logo.png" alt="logo" width={48} />
        </>
    )
}

export default Logo;