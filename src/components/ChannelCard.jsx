import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail}) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px'
        }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`} >
                <CardContent sx={{
                    dispaly: 'flex', flexDirection: 'column', justifyContent: 'center',
                    textAlign: 'center', color: '#FFF'
                }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbmails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2, border: '1px solid #e3e3e3'
                        }}
                    >
                        <Typography variant='h6'>
                            {channelDetail?.snippet?.title}
                            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                        </Typography>
                        {
                            channelDetail?.statistics?.subscriberCount && (
                                <Typography>
                                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                                </Typography>
                            )
                        }
                    </CardMedia>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard