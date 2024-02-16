import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Popup = ({ open, onClose, title, disagree, agree, onAgree }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: 'black',
                    color: 'white',
                },
            }}
        >
            <DialogTitle id="responsive-dialog-title">
                {title}
            </DialogTitle>
            <DialogActions>
                <Button autoFocus onClick={onClose} sx={{ color: '#fff' }}>
                    {disagree}
                </Button>
                <Button onClick={onAgree} autoFocus sx={{ color: '#e50914' }}>
                    {agree}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

Popup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    disagree: PropTypes.string.isRequired,
    agree: PropTypes.string.isRequired,
    onAgree: PropTypes.func.isRequired
}

export default Popup;