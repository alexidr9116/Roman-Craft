import PropTypes from 'prop-types'
import { Box, SvgIcon, Typography } from "@mui/material";

InventoryItem.propTypes = {
    image: PropTypes.string,
    count: PropTypes.number,
    isWeaponItem: PropTypes.bool,
}
export default function InventoryItem({ image = '', count = 0, name = '', isWeaponItem= false, ...other }) {
    return (
        <Box component="div" {...other} >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 120 120">
                <defs >
                    <radialGradient xmlns="http://www.w3.org/2000/svg" id="radial-gradient" cx="1286.4175" cy="-152.3784" fx="1286.4175" fy="-152.3784" r="41.6482" gradientTransform="translate(-1196.4462 488.9718) scale(1 2)" gradientUnits="userSpaceOnUse">
                        <stop offset=".1374" stopColor="#33312b" />
                        <stop offset="1" stopColor="#000" />
                    </radialGradient>
                    <clipPath xmlns="http://www.w3.org/2000/svg" id="clippath">
                        <rect x="49.1482" y="144.2431" width="82.2254" height="79.9147" rx="2.4162" ry="2.4162" transform="translate(180.5217 368.4008) rotate(180)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth=".2484" />
                    </clipPath>

                </defs>
                <g xmlns="http://www.w3.org/2000/svg" transform="translate(-40,-120)">
                    <g>
                        <rect x="52.3991" y="148.7076" width="84.4748" height="82.1009" rx="2.4823" ry="2.4823" transform="translate(189.2731 379.5161) rotate(180)" fill="#910909" />
                        <g>
                            <rect x="47.7338" y="143.1646" width="84.4748" height="82.1009" rx="2.4823" ry="2.4823" transform="translate(179.9425 368.43) rotate(180)" fill="url(#radial-gradient)" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.1121" />
                            <g mix-blend-mode="multiply">
                                <g clipPath="url(#clippath)">
                                    <use transform="translate(136.318 258.2883) rotate(-180) scale(.1143)" />
                                </g>
                                <rect x="49.1482" y="144.2431" width="82.2254" height="79.9147" rx="2.4162" ry="2.4162" transform="translate(180.5217 368.4008) rotate(180)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth=".2484" />
                            </g>
                        </g>
                    </g>
                    {!isWeaponItem &&
                    <rect x="110.6803" y="126.7633" width="41.3864" height="26.6712" rx="5.0583" ry="5.0583" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.1121" />
                    }
                    {image !== '' &&
                        <image x="47.7338" y="143.1646" width="84.4748" height="82.1009" href={image}></image>
                    }
                    {count > 0 &&
                        <text fill='#fff' fontSize='22'>
                            <tspan x="123.6803" y="148.7633" width="41.3864" height="26.6712">
                                {count}
                            </tspan>
                        </text>
                    }
                    <text fill='#ccc' fontSize='12'>
                        <tspan x="52.3991" y="246.7633" width="240.3864" height="26.6712">
                            {name}
                        </tspan>
                    </text>

                </g>
            </svg>

        </Box>

    )
}