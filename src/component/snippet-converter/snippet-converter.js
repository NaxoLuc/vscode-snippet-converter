import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Language } from '../constants/language';
import Button from '@mui/material/Button';
import { SnippetTemplate } from '../constants/snippet-template';

export const SnippetConverter = () => {
    const [language, setLanguage] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [snippetJson, setSnippetJson] = React.useState('');
    const [files, setFiles] = React.useState([]);

    const convert = () => {
        const snippet = JSON.parse(snippetJson);
        
        Object.entries(snippet).forEach(([key, value]) => {
            const snippetName = key;
            const snippetBody = value.body;
            const snippetDescription = value.description;
            const snippetShortcut = value.prefix;
            const snippetCode = SnippetTemplate(snippetName, snippetBody, snippetDescription, snippetShortcut, language, author);
            setFiles((files) => [...files, { name: snippetName, content: snippetCode }]);
        });
        console.log(files);
    };
    return (
        <Box display={"flex"} sx={{ width: '100%' }}>
            <Box sx={{ width: '50%' }}>
                <TextField
                    id="json-snippet"
                    label="VS Code Snippet JSON"
                    multiline
                    rows={30}
                    fullWidth={true}
                    onChange={(e) => setSnippetJson(e.target.value)}
                />
            </Box>
            <Box sx={{ width: '50%', padding: '1vw', display:'flex', flexDirection: 'column', gap: '2vh' }}>
                <TextField
                    id='author'
                    label='Author'
                    fullWidth={true}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <FormControl fullWidth>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select
                        labelId="language-label"
                        id="demo-simple-select"
                        label="Language"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                    >
                        {Language.map((language, index) => {
                            return <MenuItem key={index} value={language}>{language}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={convert}>Convert</Button>
            </Box>
        </Box>

    )
}
