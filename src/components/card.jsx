import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    height: '85%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

export default function MediaCard({ item }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    {item.name}
                </Typography>

            </CardContent>
            <CardActions style={{ justifyContent: 'center', paddingTop: '0' }} >
                <Button size="small">
                <a href='https://github.com/lucianarossa/Boxbonny-React/tree/master' target="_blank" rel="noopener noreferrer" >CODE</a>
                </Button>
                <>
                    <Button onClick={handleOpen} size="small">Web</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        
                    >
                    <Box sx={style} style={{borderRadius:'10px'}} >
                    <iframe src="https://boxbonny.herokuapp.com/" title="W3Schools Free Online Web Tutorials" style={{width:'100%', borderRadius:'10px'}} />
                    </Box>
                    </Modal>
                </>
            </CardActions>
        </Card>
    );
}
