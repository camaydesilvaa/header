import { Fab, Modal, Stack, styled, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack, Image } from "@mui/icons-material";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Delete"
        sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30},
        }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={300} bgcolor="white" p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">
            Create Post
            </Typography>
            <UserBox>
                <Avatar
                src="https://c8.alamy.com/comp/FX7KKB/spongebob-squarepants-tv-series-1999-usa-season-9-2011-created-by-FX7KKB.jpg"
                sx={{ width: 30, height: 30}}
                />
                <Typography fontWeight={500} variant="span">Jane Doe</Typography>
            </UserBox>
            <TextField
          sx={{width: "100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder= "What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group"
        >
  <Button>Post</Button>
  <Button sx={{width:"100px"}}>
    <DateRange/>
    </Button>
</ButtonGroup>
        </Box>
        </StyledModal>
        </>
    )
}

export default Add