import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const RootStyle = styled(Button, {
})(({ theme, hover}) => ({
    '&:hover':{
        backgroundColor:hover,
     
    }
}));
export default function CustomButton({...others}){
    return (
        <RootStyle {...others} hover={others?.sx?.backgroundColor}>

        </RootStyle>
    )
}