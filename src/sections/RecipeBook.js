import { Box, Stack, Typography } from "@mui/material"
import InventoryItem from "../component/InventoryItem"
import WeaponTree from "../component/WeaponTree"
const REQUIRE_MATERIALS = [
    { image: '/assets/casts/CASTS_BASIC_BLUDGEON-01.png', name: "bludgeon" },
    { image: '/assets/casts/CASTS_BASIC_LONG_RANGE-01.png', name: "long range" },
    { image: '/assets/materials/MATERIALS BRONZE-01.png', name: "Bronze" },
    { image: '/assets/materials/MATERIALS DIAMOND-01.png', name: "Diamond" },
    { image: '/assets/materials/MATERIALS GOLD-01.png', name: "Gold" },
    { image: '/assets/materials/MATERIALS IRON-01.png', name: "Iron" },
]
export default function RecipeBook() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Box component="fieldset" spacing={2} sx={{ position: 'relative', border: '2px solid white', borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 2 }}>
                    <legend><Typography sx={{ color: "white" }} variant="h4"
                        >Require Materials</Typography></legend>
                    {REQUIRE_MATERIALS.map((item, index) => (
                        <InventoryItem key={index}
                            sx={{ width: '105px', height: "130px" }}
                            image={item.image}

                            isWeaponItem={true}
                        ></InventoryItem>
                    ))}


                </Box>

            </Box>

            {/* <Box width={'100%'} height={'100%'} sx = {{display:"flex", color:"white", justifyContent:'space-between'}}>
                <label></label>
                <Typography sx = {{flexShrink:1}}>LV1</Typography>
                <Typography sx = {{flexShrink:1}}>LV1</Typography>
                <Typography sx = {{flexShrink:1}}>LV1</Typography>
                <Typography sx = {{flexShrink:1}}>LV1</Typography>
                <Typography sx = {{flexShrink:1}}>LV1</Typography>
                
            </Box> */}
            <Box sx={{ width: '100%' }}>
                <WeaponTree />
            </Box>

        </Box>
    )
}