import React from 'react';
import { Card, CardContent, Typography, Box } from '@material-ui/core';





const UsersNavigatorDetails = () => {



    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    return (
        <Card >
            <CardContent>
                <Typography>
                    <Box fontSize={8}>
                        <ul>
                            {navigator.appVersion ? <li>Detecting App: {navigator.appVersion}</li> : ''}
                            {navigator.appName ? <li>App Name: {navigator.appName}</li> : ''}
                            {navigator.appVersion ? <li>Version: {navigator.appVersion}</li> : ''}
                            {navigator.cookieEnabled ? <li>Cookies Enabled: {navigator.cookieEnabled ? ' Yes' : ' No'}</li> : ''}
                            {navigator.language ? <li>Language: {navigator.language}</li> : ''}
                            {navigator.platform ? <li>Platform: {navigator.platform}</li> : ''}
                            {navigator.product ? <li>Product: {navigator.product}</li> : ''}
                            {navigator.userAgent ? <li>User Agent: {navigator.userAgent}</li> : ''}
                        </ul>



                    </Box>
                </Typography>
            </CardContent >
        </Card >

    )
}

export default UsersNavigatorDetails;