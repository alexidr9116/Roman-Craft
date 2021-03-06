import { Box, Stack, Grid } from "@mui/material";
import { useState } from "react";

import CraftingTableTitleIcon from "../assets/illustration_crafting_item";
import CraftCreating from "../component/CraftCreating";
import Page from "../component/Page";
import Scrollbar from "../component/scrollbar/Scrollbar";
import useResponsive from "../hook/useResponsive";
import InventoryList from "../sections/InventoryList";
import RecipeBook from "../sections/RecipeBook";

const CRAFTING_ITEMS = [

    { image: '/assets/casts/CASTS_BASIC_BLUDGEON-01.png', name: "bludgeon" },
    { image: '/assets/casts/CASTS_BASIC_LONG_RANGE-01.png', name: "long range" },
    { image: '/assets/materials/MATERIALS BRONZE-01.png', name: "Bronze" },
    { image: '', name: "Diamond" },
    { image: '/assets/materials/MATERIALS GOLD-01.png', name: "Gold" },
    { image: '/assets/materials/MATERIALS IRON-01.png', name: "Iron" },

]
const RESULT_ITEM = {
    image: '/assets/Chinese Pangu Axe LV 4-01.png', name: "Chinese Pangu Axe"
}
export default function CraftCreate() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const isDesktop = useResponsive('up', 'lg')
    return (
        <Page title="Craft Create">
            <Grid container sx={{ padding: 4, }} >
                <Grid item lg={4} xs={12} sx={{ paddingX: 2, marginTop: -8, marginBottom: 8 }}>
                    {/* inventory list */}

                    <InventoryList></InventoryList>

                </Grid>
                <Grid item lg={8} xs={12}>
                    <Stack sx={{ paddingRight: 2, marginY: -8, marginBottom: 8 }}>
                        <CraftingTableTitleIcon handleRecipeBook={() => { setCurrentIndex(2) }} handleCraftingTable={() => { setCurrentIndex(1) }} currentIndex={currentIndex} />
                        <Box sx={{
                            border: "solid 2px #840707", borderRadius: 3, borderTopLeftRadius: 0,
                            minHeight: '500px',
                            maxHeight: (isDesktop ? '800px' : '500px'),
                            overflow: "auto",
                            paddingLeft: 3,
                            paddingRight: 3,
                            marginLeft: 3,
                            padding: 2,
                            background: "rgba(40,40,40,0.7)",
                        }}>
                            <Scrollbar sx={{
                                minHeight: '500px',
                                height: (isDesktop ? '750px' : '450px'),
                            }}>
                                {currentIndex === 1 &&

                                    <CraftCreating items={CRAFTING_ITEMS} sx={{ width: '100%' }} resultItem={RESULT_ITEM} />
                                }
                                {currentIndex === 2 &&
                                    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <RecipeBook />
                                    </Box>
                                }
                            </Scrollbar>
                        </Box>

                    </Stack>

                </Grid>
            </Grid>
            <Box sx={{ height: '6rem' }}>

            </Box>
        </Page >
    )
}