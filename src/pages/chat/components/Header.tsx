import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";

export default function Header() {
    return (
        <Sheet
            sx={{
                display: { xs: "flex", sm: "none" },
                alignItems: "center",
                justifyContent: "space-between",
                position: "fixed",
                top: 0,
                width: "100vw",
                height: "var(--Header-height)",
                zIndex: 9995,
                p: 2,
                gap: 1,
                borderBottom: "1px solid",
                borderColor: "background.level1",
                boxShadow: "sm",
            }}>
            <GlobalStyles
                styles={(theme) => ({
                    ":root": {
                        "--Header-height": "0px",
                        [theme.breakpoints.up("lg")]: {
                            "--Header-height": "0px",
                        },
                    },
                })}
            />
        </Sheet>
    );
}
