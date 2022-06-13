import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Outlet } from 'react-router-dom';
import { CONFIG_UI } from "../Config";
import AppHeader from "./AppHeader";
 
export default function MainLayout() {
    return (
        <>
            <AppHeader></AppHeader>
            
            <Box component='div' sx={{minHeight:"768px",overflowX:'hidden', mt: CONFIG_UI.height,
            background:'gray',
            // background:"url('../assets/Crafting_UI_layer0_background.svg')" ,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:"repeat" 
            }}
            >
                
                <Outlet />
            </Box>
        </>

    )
}