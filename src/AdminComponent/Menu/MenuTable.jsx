import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const orders = [1, 1, 1, 1, 1, 1, 1]
const MenuTable = () => {
    const navigate=useNavigate();
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton onClick={()=>navigate("/admin/restaurants/add-menu")} aria-label="settings">
                        <CreateIcon/>
                    </IconButton>
                }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">image</TableCell>
                                <TableCell align="right">title</TableCell>
                                <TableCell align="right">ingredients</TableCell>
                                <TableCell align="right">price</TableCell>
                                <TableCell align="right">Avaibility</TableCell>
                                <TableCell align="right">Delete</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {1}
                                    </TableCell>
                                    <TableCell align="right">{"image"}</TableCell>
                                    <TableCell align="right">{"9osos@gmail.com"}</TableCell>
                                    <TableCell align="right">{"price"}</TableCell>
                                    <TableCell align="right">{"pizza"}</TableCell>
                                    <TableCell align="right"><IconButton>
                                        <Delete/>
                                        </IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Card>

        </Box>
    )
}

export default MenuTable
