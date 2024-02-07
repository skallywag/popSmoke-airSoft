import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import App from "./App";
import {MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider
            theme={{
                fontFamily: 'Verdana, sans-serif',
                fontFamilyMonospace: 'Monaco, Courier, monospace',
            }}>
            <App/>
        </MantineProvider>
    </React.StrictMode>,
)
