import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const MENU_ROUTES = [
    {
        title: "NFTs",
        path: "/craft"
    },
    {
        title: "ROADMAP",
        path: "/craft"
    },
    {
        title: "WHITEPAPAER",
        path: "/craft"
    },
    {
        title: "ABOUT",
        path: "/craft"
    },
    {
        title: "FREEBIES",
        path: "/craft"
    },
    {
        title: "MARKETPLACES",
        path: "/craft"
    }
]
export default function ApplicationMenus() {
    return (
        <Stack direction="row">
            {MENU_ROUTES.map((menu, index) => (
                <Button variant="text" key = {index} sx = {{color:'white'}}>
                    {menu.title}
                </Button>
            ))
            }
        </Stack >
    )
}