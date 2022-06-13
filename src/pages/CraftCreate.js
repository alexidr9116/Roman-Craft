import { Box, Stack, Grid } from "@mui/material";
import { useState } from "react";

import CraftingTableTitleIcon from "../assets/illustration_crafting_item";
import CraftCreating from "../component/CraftCreating";
import Page from "../component/Page";
import InventoryList from "../sections/InventoryList";

const CRAFTING_ITEMS = [

    { image: '/assets/casts/CASTS_BASIC_BLUDGEON-01.png', count: 1, name: "bludgeon" },
    { image: '/assets/casts/CASTS_BASIC_LONG_RANGE-01.png', count: 1, name: "long range" },
    { image: '/assets/materials/MATERIALS BRONZE-01.png', count: 1, name: "Bronze" },
    { image: '/assets/materials/MATERIALS DIAMOND-01.png', count: 1, name: "Diamond" },
    { image: '/assets/materials/MATERIALS GOLD-01.png', count: 1, name: "Gold" },
    { image: '/assets/materials/MATERIALS IRON-01.png', count: 1, name: "Iron" },
    { image: '/assets/materials/MATERIALS SILVER-01.png', count: 1, name: "Silver" },
    { image: '/assets/materials/MATERIALS STONE-01.png', count: 1, name: "Stone" },
    { image: '/assets/materials/MATERIALS WOOD-01.png', count: 1, name: "Wood" },

]

export default function CraftCreate() {
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <Page title="Craft Create">
            <Grid container sx={{padding:4, }} >
                <Grid item md={4} xs={12} sx={{ paddingX: 2, marginTop:-8, marginBottom:8 }}>
                    <InventoryList></InventoryList>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Stack sx={{ paddingRight: 2, marginY:-8, marginBottom:8}}>
                        <CraftingTableTitleIcon  handleRecipeBook={()=>{setCurrentIndex(2)}} handleCraftingTable={()=>{setCurrentIndex(1)}} currentIndex = {currentIndex} />
                        <Box sx={{
                            border: "solid 2px #840707", borderRadius: 3, borderTopLeftRadius: 0,
                            minHeight: '500px',
                            maxHeight:'800px',
                            overflow: "auto",
                            paddingLeft: 3,
                            paddingRight: 6,
                            marginLeft: 3,
                            padding: 2,
                           
                            background: "rgba(40,40,40,0.7)",
                        }}>
                            <CraftCreating items={CRAFTING_ITEMS} sx ={{  width:'100%'}}/>
                        </Box>
                    </Stack>

                </Grid>
            </Grid>
            <Box sx={{height:'6rem'}}>

            </Box>
        </Page>
    )
}