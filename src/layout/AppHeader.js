import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material"

import { styled } from "@mui/material/styles"
import Logo from "../component/Logo";
import { CONFIG_UI } from "../Config";
import useResponsive from "../hook/useResponsive";
import ApplicationMenus from "./ApplicationMenus";

import InstagramIcon from "../component/icons/Instagram";
import DiscordIcon from "../component/icons/Discord";
import TwitterIcon from "../component/icons/Twitter";
import BackgroundButton from "../component/BackgroundButton";

const RootStyle = styled(AppBar, {
})(({ theme }) => ({
    width: '100%',
    height: CONFIG_UI.height,
    boxShadow: 'none',
    backgroundColor: 'black',

}));

const IconStyle = styled('div', {})(({ }) => ({
    width: '28px',
    height: '28px',
    display: 'flex',
    background: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    borderRadius: '100%',
    cursor: "pointer",
}))
export default function AppHeader({ }) {
    const isDesktop = useResponsive('up', 'lg');

    return (
        <RootStyle >
            <Toolbar
                sx={{ minHeight: '100% !important', px: { lg: 5 } }}
            >
                <Logo></Logo>
                <Box sx={{ flexGrow: 1 }} />

                <ApplicationMenus></ApplicationMenus>
                <Stack spacing={1} direction='row' sx = {{alignItems:'center'}}>
                    <BackgroundButton sx={{ borderRadius: 20, backgroundColor: 'red' }} variant='outline'>
                        JOIN DISCORD
                    </BackgroundButton>
                    <IconStyle> <TwitterIcon viewBox={'-2 -2 28 28'}></TwitterIcon></IconStyle>
                    <IconStyle> <InstagramIcon viewBox={'-2 -2 28 28'}></InstagramIcon></IconStyle>

                    <IconStyle><DiscordIcon viewBox={'-2 -2 28 28'}></DiscordIcon></IconStyle>
                </Stack>

            </Toolbar>
        </RootStyle>
    )
}