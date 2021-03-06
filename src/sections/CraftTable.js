import { Stack, Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles"
import React from "react";
import InventoryTitleIllustration from "../assets/illustration_inventory";
import InventoryItemIllustration from "../assets/illustration_inventory_item";
import { CatalystIcon } from "../component/icons/CatalystIcon";
import { GemsIcon } from "../component/icons/GemsIcon";
import InventoryListIcon from "../component/icons/InventoryListIcon";
import { MaterialsIcon } from "../component/icons/MaterailsIcon";

import { WeaponCastIcon } from "../component/icons/WeaponCastIcon";
import InventoryItem from "../component/InventoryItem";
const FlexStyle = styled('div', {})(({ }) => ({
    display: "flex",
    flexWrap: "wrap",

}))

const INVENTORY_ITEMS = [
    {
        title: 'Weapon cast',
        icon: <WeaponCastIcon />,
        items: [
            { image: '/assets/casts/CASTS_BASIC_BLUDGEON-01.png', count: 1, name: "bludgeon" },
            { image: '/assets/casts/CASTS_BASIC_LONG_RANGE-01.png', count: 1, name: "long range" },
            { image: '/assets/casts/CASTS_BASIC_POLEARM-01.png', count: 1, name: "ploearm" },
            { image: '/assets/casts/CASTS_BASIC_SHIELD-01.png', count: 1, name: "shiled" },
            { image: '/assets/casts/CASTS_BASIC_SWORD-01.png', count: 1, name: "sword" }
        ]
    },
    {
        title: 'Catalysis',
        icon: <CatalystIcon />,
        items: [
            { image: '/assets/catalyst/BOTTLE_MAYAN_GREEN-01.png', count: 1, name: "mayan green" },
            { image: '/assets/catalyst/BOTTLE_VIKING_BLUE-01.png', count: 1, name: "viking blue" },
            { image: '/assets/catalyst/ROMAN_BOTTLE_RED-01.png', count: 1, name: "roman red" },

        ]
    },
    {
        title: 'Materials',
        icon: <MaterialsIcon />,
        items: [
            { image: '/assets/materials/MATERIALS BRONZE-01.png', count: 1, name: "Bronze" },
            { image: '/assets/materials/MATERIALS DIAMOND-01.png', count: 1, name: "Diamond" },
            { image: '/assets/materials/MATERIALS GOLD-01.png', count: 1, name: "Gold" },
            { image: '/assets/materials/MATERIALS IRON-01.png', count: 1, name: "Iron" },
            { image: '/assets/materials/MATERIALS SILVER-01.png', count: 1, name: "Silver" },
            { image: '/assets/materials/MATERIALS STONE-01.png', count: 1, name: "Stone" },
            { image: '/assets/materials/MATERIALS WOOD-01.png', count: 1, name: "Wood" },
        ]
    },
    {
        title: 'Gems',
        icon: <GemsIcon />,
        items: [
            { image: '/assets/gems/GALACTIC GEM-01.png', count: 1, name: "Galactic" },
            { image: '/assets/gems/GEM ICE-01.png', count: 1, name: "Ice" },
            { image: '/assets/gems/GEMS EARTH-01.png', count: 1, name: "Earth" },
            { image: '/assets/gems/GEMS FIRE-01.png', count: 1, name: "Fire" },
            { image: '/assets/gems/GEMS LIGHT-01.png', count: 1, name: "Light" },
            { image: '/assets/gems/GEMS WIND-01.png', count: 1, name: "Wind" },
            { image: '/assets/gems/SPIRIT GEM-01.png', count: 1, name: "Spirit" },

        ]
    },

]
export default function CraftingTable() {
    return (
        <Stack>
            <InventoryTitleIllustration></InventoryTitleIllustration>
            <Box sx={{
                border: "solid 2px #c60000", borderRadius: 3, borderTopLeftRadius: 0,
                height: '500px',
                overflow: "auto",
                paddingY: 2,
                paddingLeft: 3,
                paddingRight: 6,
                background: "rgba(40,40,40,0.7)",
                
            }}>

                {INVENTORY_ITEMS.map((inventory, index) => (
                    <React.Fragment key={index}>
                        <Stack direction="row" sx={{ alignItems: 'center', borderBottom: "2px solid white", padding: 1 }}>
                            {inventory.icon}
                            <Typography color={'white'}>{inventory.title}</Typography>
                        </Stack>
                        <FlexStyle>
                            {inventory.items.map((item, ind) => (
                                <InventoryItem key = {ind} count={item.count} image={item.image} sx={{ width: '105px', height: "130px" }} name={item.name}></InventoryItem>
                            ))}
                        </FlexStyle>

                    </React.Fragment>
                ))
                }

            </Box>
        </Stack>
    )
}