import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';


const DetailTable = () => {
    return(
        <React.Fragment>
            <Typography variant='h6' style={{marginLeft: '500px', marginTop: '20px', fontWeight: 'bold', fontSize: '30px',color: '#4D004C'}}>Real Time Application Status</Typography>
            <Box sx={{ width: '90%', maxWidth: 1200, margin: '30px', backgroundColor: '#FFF5FF', margin: '50px'}} >
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow style={{background: 'linear-gradient(to right, #FFF5FF, #FF1AFB)'}}>
                    <TableCell>Service(s)</TableCell>
                    {/* <Divider orientation="vertical"  /> */}
                    <TableCell>Time-Limit Prescribed as per PSGA</TableCell>
                    {/* <Divider orientation="vertical" flexItem /> */}
                    <TableCell>Total No. of Application Received</TableCell>
                    <TableCell>Total No. of Application Approved</TableCell>
                    <TableCell>Avg. Time</TableCell>
                    <TableCell>Median Time</TableCell>
                    <TableCell>Minimum</TableCell>
                    <TableCell>Maximum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>Change of Land Use (CLU)</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>61</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>59 days</TableCell>
                    <TableCell>88 days</TableCell>
                    <TableCell>5 days</TableCell>
                    <TableCell>181 days</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Building Plan Approval</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>13787</TableCell>
                    <TableCell>9502</TableCell>
                    <TableCell>57 days</TableCell>
                    <TableCell>181 days</TableCell>
                    <TableCell>1 days</TableCell>
                    <TableCell>363 days</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Plinth Approval</TableCell>
                    <TableCell>7 </TableCell>
                    <TableCell>352</TableCell>
                    <TableCell>1548</TableCell>
                    <TableCell>98 days</TableCell>
                    <TableCell>182 days</TableCell>
                    <TableCell>1 day</TableCell>
                    <TableCell>365</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Completition Occupancy Certificate</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell>1486</TableCell>
                    <TableCell>4833</TableCell>
                    <TableCell>46 days</TableCell>
                    <TableCell>182 days</TableCell>
                    <TableCell>1 days</TableCell>
                    <TableCell>365 days</TableCell>
                </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </React.Fragment>
    )
}

export default DetailTable

