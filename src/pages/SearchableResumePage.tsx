import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";

import {
    AppBar,
    Autocomplete,
    Box, Button, ButtonGroup,
    Card,
    Divider,
    List,
    ListItem,
    Stack,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";

import {Resume, ResumeEducation, ResumeWork} from "../interfaces/Resume/Resume";
import {RESUME_URL} from "../constants/Constants";


export interface ResumeProps {
    resume: Resume;
}

const AUTOCOMPLETE_OPTIONS = [
    {
        label: "Experience",
        id: 'experience'
    },
    {
        label: "Education",
        id: 'education'
    }
]

export default function SearchableResumePage(props: ResumeProps) {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Enoch Chu's Resume
                        </Typography>
                        <Box sx={{paddingRight: "1em"}}>
                            <Autocomplete
                                disablePortal
                                options={AUTOCOMPLETE_OPTIONS}
                                sx={{ width: 300, backgroundColor: '#FFF' }}
                                renderInput={(params) => <TextField {...params} label="" />}
                                onChange={(e, v): void => {
                                    if (v != null) {
                                        const element = document.getElementById(v.id);
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }
                                    }
                                }}
                            />
                        </Box>
                        <ButtonGroup>
                            <Button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.download = RESUME_URL;
                                    link.href = RESUME_URL;
                                    link.click();
                                }}>
                                Download</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </Box>
            <Card>
                <Box sx={{ p: 2 }}>
                    <Stack
                        direction="column"
                        sx={{ justifyContent: '', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h2" component="div">
                            <a href={props.resume.basic.url}>
                                {props.resume.basic.name}
                            </a>
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Contact available upon request
                        </Typography>
                    </Stack>
                </Box>
                <Divider/>

                <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="h4" component="div" id={"experience"}>
                        Experience
                    </Typography>
                    {
                        props.resume.work?.map(
                            (work: ResumeWork) => {
                                return (
                                    <Stack
                                        direction="column"
                                        padding={1}
                                        sx={{justifyContent: ''}}
                                    >
                                        <Typography variant="h5" component="div">
                                            <a href={work.url}>{work.name}</a>
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            { work.position }
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            { work.startDate} - { work.endDate }
                                        </Typography>
                                        <List>
                                            {
                                                work.highlights.map((highlight: string) => {
                                                    return (
                                                        <ListItem>{ highlight }</ListItem>
                                                    )
                                                })
                                            }

                                        </List>
                                    </Stack>
                                )
                            }
                        )
                    }
                </Box>

                <Divider />

                <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="h4" component="div" id={"education"}>
                        Education
                    </Typography>
                    {
                        props.resume.education?.map(
                            (education: ResumeEducation) => {
                                return (
                                    <Stack
                                        direction="column"
                                        sx={{justifyContent: ''}}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
                                            <a href={education.url}>
                                                {education.institution}
                                            </a>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            { education.area }
                                        </Typography>
                                    </Stack>
                                )
                            }
                        )
                    }
                </Box>
            </Card>
        </div>
    );
}