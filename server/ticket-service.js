
import fs from 'fs';
import path from 'path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

// Load Fonts
const fontBufferRobotoRegular = fs.readFileSync(path.resolve('./node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff'));
const fontBufferRobotoBold = fs.readFileSync(path.resolve('./node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff'));
const fontBufferRobotoBlack = fs.readFileSync(path.resolve('./node_modules/@fontsource/roboto/files/roboto-latin-900-normal.woff'));

function randomId(prefix = "WYX") {
    const part = Math.random().toString(36).slice(2, 8).toUpperCase();
    const num = Math.floor(100 + Math.random() * 900);
    return `${prefix}-${part}-${num}`;
}

function prettyDate() {
    const d = new Date();
    return d.toISOString().split('T')[0];
}

function getAirportCode(destination) {
    if (!destination) return 'TRP';
    const clean = destination.replace(/[^a-zA-Z]/g, "").toUpperCase();
    return clean.slice(0, 3) || 'TRP';
}

export async function generateTicket(user) {
    const { name, country, destination, email } = user;

    // Derived Data
    const departCode = "WYX";
    const arriveCode = getAirportCode(destination);
    const createdAt = prettyDate();
    const ticketId = randomId();


    const element = {
        type: 'div',
        props: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                width: 800,
                height: 320, // Adjusted aspect ratio
                background: 'linear-gradient(180deg, #f6f0e4 0%, #f3efe6 100%)',
                borderRadius: 18,
                border: '1px solid rgba(0,0,0,0.12)',
                position: 'relative',
                fontFamily: 'Roboto',
                overflow: 'hidden',
                color: '#111',
            },
            children: [
                // Header Row
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            padding: '18px 20px 10px',
                            borderBottom: '1px solid rgba(0,0,0,0.12)',
                        },
                        children: [
                            // Brand Left
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', flexDirection: 'column' },
                                    children: [
                                        { type: 'div', props: { style: { fontWeight: 900, fontSize: 22, letterSpacing: 2 }, children: 'WAYNIX' } },
                                        { type: 'div', props: { style: { fontSize: 12, letterSpacing: 1.4, opacity: 0.75, marginTop: 2 }, children: 'FOUNDING TRAVELER PASS' } }
                                    ]
                                }
                            },
                            // Codes Right
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', alignItems: 'center', gap: 14 },
                                    children: [
                                        {
                                            type: 'div',
                                            props: {
                                                style: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 60 },
                                                children: [
                                                    { type: 'div', props: { style: { fontWeight: 900, fontSize: 22, letterSpacing: 2 }, children: departCode } },
                                                    { type: 'div', props: { style: { fontSize: 10, letterSpacing: 1.6, opacity: 0.65, marginTop: 6 }, children: 'FROM' } }
                                                ]
                                            }
                                        },
                                        { type: 'div', props: { style: { fontSize: 18, opacity: 0.7, transform: 'translateY(-4px)' }, children: '→' } },
                                        {
                                            type: 'div',
                                            props: {
                                                style: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 60 },
                                                children: [
                                                    { type: 'div', props: { style: { fontWeight: 900, fontSize: 22, letterSpacing: 2 }, children: arriveCode } },
                                                    { type: 'div', props: { style: { fontSize: 10, letterSpacing: 1.6, opacity: 0.65, marginTop: 6 }, children: 'TO' } }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                // Main Body
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            flex: 1,
                            padding: '16px 20px 14px',
                        },
                        children: [
                            // LEFT PANEL (Info)
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flex: 1.35,
                                        flexDirection: 'column',
                                        paddingRight: 10
                                    },
                                    children: [
                                        // Field Grid (Simulated with flex wrap)
                                        {
                                            type: 'div',
                                            props: {
                                                style: { display: 'flex', flexWrap: 'wrap', gap: 8 },
                                                children: [
                                                    createField('Passenger', name || 'Traveler'),
                                                    createField('Country', country || '—'),
                                                    createField('Manifest', destination || '—'),
                                                    createField('Issued', createdAt),
                                                    createField('Ticket ID', ticketId, '350px'),
                                                    email ? createField('Email', email, '350px') : null
                                                ].filter(Boolean)
                                            }
                                        },

                                    ]
                                }
                            },
                            // PERFORATION LINE
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 28,
                                        padding: '0 8px',
                                        height: '100%'
                                    },
                                    children: [
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    width: 2,
                                                    height: '100%',
                                                    borderRadius: 999,
                                                    borderLeft: '2px dashed rgba(0,0,0,0.22)',
                                                    opacity: 0.5
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            // RIGHT PANEL (Stub)
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        flex: 0.95,
                                        flexDirection: 'column',
                                        paddingLeft: 10,
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start'
                                    },
                                    children: [
                                        { type: 'div', props: { style: { fontSize: 56, fontWeight: 900, letterSpacing: 3, lineHeight: 1, opacity: 0.88 }, children: arriveCode } },

                                        // STAMP
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    display: 'flex',
                                                    transform: 'rotate(-10deg)',
                                                    borderRadius: 16,
                                                    padding: 6,
                                                    background: 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)',
                                                },
                                                children: [
                                                    {
                                                        type: 'div',
                                                        props: {
                                                            style: {
                                                                border: '2px dashed rgba(150,20,20,0.75)',
                                                                borderRadius: 16,
                                                                padding: '10px 12px',
                                                                background: 'rgba(255,255,255,0.35)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                            },
                                                            children: [
                                                                { type: 'div', props: { style: { fontSize: 14, fontWeight: 900, letterSpacing: 1.8, color: 'rgba(150,20,20,0.95)' }, children: 'FOUNDERS ACCESS' } },
                                                                { type: 'div', props: { style: { marginTop: 4, fontSize: 11, letterSpacing: 1.2, opacity: 0.75, textTransform: 'uppercase' }, children: 'Founding Traveler' } }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        },

                                        // Note
                                        { type: 'div', props: { style: { fontSize: 12, opacity: 0.78, lineHeight: 1.35, marginTop: 10 }, children: 'Keep this pass. You will receive your demo link and app access by email.' } }
                                    ]
                                }
                            }
                        ]
                    }
                },
                // Footer Row
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px 20px 14px',
                            borderTop: '1px solid rgba(0,0,0,0.12)',
                            fontSize: 11,
                            opacity: 0.75,
                            letterSpacing: 0.4
                        },
                        children: [
                            { type: 'div', props: { children: 'Boarding: Early Access • Class: Founders • Status: Reserved' } },
                            { type: 'div', props: { children: 'waynix.ai' } }
                        ]
                    }
                }
            ]
        }
    };

    const svg = await satori(element, {
        width: 800,
        height: 320,
        fonts: [
            { name: 'Roboto', data: fontBufferRobotoRegular, weight: 400, style: 'normal' },
            { name: 'Roboto', data: fontBufferRobotoBold, weight: 700, style: 'normal' },
            { name: 'Roboto', data: fontBufferRobotoBlack, weight: 900, style: 'normal' },
        ],
    });

    const resvg = new Resvg(svg, {
        background: 'rgba(0,0,0,0)',
        fitTo: { mode: 'width', value: 800 },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    const filename = `ticket-${Date.now()}.png`;
    const outputDir = path.resolve('public/generated');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, filename), pngBuffer);

    return `/generated/${filename}`;
}

function createField(label, value, width) {
    return {
        type: 'div',
        props: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.10)',
                borderRadius: 12,
                padding: '8px',
                background: 'rgba(255,255,255,0.35)',
                width: width || '170px', // Fixed width for makeshift grid
            },
            children: [
                { type: 'div', props: { style: { fontSize: 10, letterSpacing: 1.2, opacity: 0.65, textTransform: 'uppercase', marginBottom: 6 }, children: label } },
                { type: 'div', props: { style: { fontSize: 14, fontWeight: 700, lineHeight: 1.2, wordBreak: 'break-word' }, children: value } }
            ]
        }
    };
}
