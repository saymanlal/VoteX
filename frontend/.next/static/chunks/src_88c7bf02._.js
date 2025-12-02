(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/voters.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// /app/api/admins/data.ts
__turbopack_context__.s({
    "voters": (()=>voters)
});
const voters = [
    {
        name: "Sayman Lal",
        voterId: "MPJ1234567",
        address: "1345 MGM Road",
        wardNo: 12,
        zone: "North Zone",
        city: "Jabalpur",
        district: "Jabalpur",
        state: "Madhya Pradesh",
        postalCode: "482001",
        country: "India",
        signatureImage: "Qw12Kx56h"
    },
    {
        name: "Kaustubh Sen",
        voterId: "MPJ1234568",
        address: "456 Gohalpur",
        wardNo: 57,
        zone: "East Zone",
        city: "Jabalpur",
        district: "Jabalpur",
        state: "Madhya Pradesh",
        postalCode: "482002",
        country: "India",
        signatureImage: "Ss9jk746f"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/abis/VotingDApp.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"voterId\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"state\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"partyName\",\"type\":\"string\"}],\"name\":\"vote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"partyName\",\"type\":\"string\"}],\"name\":\"getVoteCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"voterId\",\"type\":\"string\"}],\"name\":\"hasVoterVoted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"));}}),
"[project]/src/app/voting/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CastVotePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$voters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/voters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$VotingDApp$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/VotingDApp.json (json)"); // adjust this path
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const CONTRACT_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
function CastVotePage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const nameFromParams = searchParams.get('name') || '';
    const [voterInfo, setVoterInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: '',
        constituency: ''
    });
    const parties = [
        {
            id: 'Bhartiya GenZ Party',
            name: 'Bhartiya GenZ Party',
            description: 'Humka chahi badlaaa.',
            logo: '/bgp.png',
            candidate: [
                'Sunil Shetty'
            ]
        },
        {
            id: 'Sooryavansham',
            name: 'Sooryavansham',
            description: 'Heera betee.',
            logo: '/sooryavansham.png',
            candidate: [
                'Bhanupratap Singh'
            ]
        },
        {
            id: 'Brahmax 1.O',
            name: 'Brahmax 1.O',
            description: 'National Level Hackathon.',
            logo: '/brahmax1.O.png',
            candidate: [
                'Harsh Chouksey'
            ]
        },
        {
            id: 'Team Vasiliades',
            name: 'Team Vasiliades',
            description: 'Brahmax 1.O winners.',
            logo: '/vasiliades.png',
            candidate: [
                'Sayman Lal'
            ]
        }
    ];
    const [selectedParty, setSelectedParty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CastVotePage.useEffect": ()=>{
            if (nameFromParams) {
                const matchedVoter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$voters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voters"].find({
                    "CastVotePage.useEffect.matchedVoter": (voter)=>voter.name === nameFromParams
                }["CastVotePage.useEffect.matchedVoter"]);
                if (matchedVoter) {
                    setVoterInfo({
                        id: matchedVoter.voterId,
                        name: matchedVoter.name,
                        constituency: matchedVoter.state || 'N/A'
                    });
                } else {
                    setVoterInfo({
                        id: '',
                        name: nameFromParams,
                        constituency: 'N/A'
                    });
                }
            }
        }
    }["CastVotePage.useEffect"], [
        nameFromParams
    ]);
    const handleVoteSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedParty) {
            alert('Please select a party to cast your vote.');
            return;
        }
        try {
            if ("object" === 'undefined' || !window.ethereum) {
                alert('🦊 MetaMask not detected.');
                return;
            }
            console.log('window.ethereum detected:', window.ethereum);
            // Request accounts
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            console.log('Connected accounts:', accounts);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            console.log('Current network:', network);
            const signer = provider.getSigner();
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$VotingDApp$2e$json__$28$json$29$__["default"], signer);
            console.log('Calling contract.vote with:', voterInfo.id, voterInfo.constituency, selectedParty);
            const tx = await contract.vote(voterInfo.id, voterInfo.constituency, selectedParty);
            console.log('Transaction response:', tx);
            await tx.wait();
            alert(`✅ Vote successfully cast for ${selectedParty}`);
        } catch (error) {
            console.error('Full error:', error);
            alert(`❌ Voting failed: ${error.message || 'Unknown error'}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-f0e7275148261234" + " " + "min-h-screen bg-[#000] px-4 sm:px-6 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "bg-white/30 backdrop-blur-md rounded-xl p-5 mb-10 text-white max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-f0e7275148261234" + " " + "text-xl sm:text-2xl font-bold mb-2 text-blue-300",
                        children: "🧾 Voter Information"
                    }, void 0, false, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-f0e7275148261234",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-f0e7275148261234" + " " + "text-blue-200 font-semibold",
                                children: "ID:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/voting/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            " ",
                            voterInfo.id || 'N/A'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-f0e7275148261234",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-f0e7275148261234" + " " + "text-blue-200 font-semibold",
                                children: "Name:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/voting/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            " ",
                            voterInfo.name || 'N/A'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-f0e7275148261234",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-f0e7275148261234" + " " + "text-blue-200 font-semibold",
                                children: "Constituency:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/voting/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            ' ',
                            voterInfo.constituency || 'N/A'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voting/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleVoteSubmit,
                className: "jsx-f0e7275148261234" + " " + "max-w-6xl mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f0e7275148261234" + " " + "flex justify-center py-5 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "font-bold text-xl text-white",
                            children: "Select a Candidate/Party below and cast your vote"
                        }, void 0, false, {
                            fileName: "[project]/src/app/voting/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f0e7275148261234" + " " + "flex justify-center items-center flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-f0e7275148261234" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: parties.map((party, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].label, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        delay: 0.2 + index * 0.1
                                    },
                                    className: `block relative bg-white/20 backdrop-blur-md border ${selectedParty === party.id ? 'border-blue-500' : 'border-white'} rounded-md p-2 w-56 h-32 cursor-pointer hover:bg-white/30 transition text-xs overflow-hidden`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: party.logo,
                                            alt: `${party.name} logo`,
                                            className: "jsx-f0e7275148261234" + " " + "absolute top-1/2 left-1/2 w-40 h-32 object-contain opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/voting/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f0e7275148261234" + " " + "relative flex justify-between items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-f0e7275148261234" + " " + "flex-1 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-f0e7275148261234" + " " + "text-white font-bold text-sm",
                                                            children: party.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/voting/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-f0e7275148261234" + " " + "text-orange-200 text-[10px]",
                                                            children: party.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/voting/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-f0e7275148261234" + " " + "text-blue-300 font-semibold mt-1",
                                                            children: "Candidate:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/voting/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-f0e7275148261234" + " " + "list-disc list-inside text-white text-[10px] ml-2",
                                                            children: party.candidate.map((candidate, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-f0e7275148261234",
                                                                    children: candidate
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/voting/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/voting/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/voting/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "party",
                                                    checked: selectedParty === party.id,
                                                    onChange: ()=>setSelectedParty(party.id),
                                                    className: "jsx-f0e7275148261234" + " " + "circle-radio mt-1 z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/voting/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/voting/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, party.id, true, {
                                    fileName: "[project]/src/app/voting/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/voting/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.5
                        },
                        className: "text-center pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            type: "submit",
                            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition",
                            children: "Submit Vote"
                        }, void 0, false, {
                            fileName: "[project]/src/app/voting/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/voting/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/voting/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f0e7275148261234",
                children: '.circle-radio.jsx-f0e7275148261234{appearance:none;cursor:pointer;border:2px solid #fff;border-radius:9999px;width:16px;height:16px;transition:border-color .2s;position:relative}.circle-radio.jsx-f0e7275148261234:checked{border-color:#2276c5}.circle-radio.jsx-f0e7275148261234:checked:before{content:"";background-color:#2276c5;border-radius:9999px;width:6px;height:6px;position:absolute;top:3px;left:3px}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/voting/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(CastVotePage, "bHCMjsZ+2bb6uNQkujAAmZS1riU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CastVotePage;
var _c;
__turbopack_context__.k.register(_c, "CastVotePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_88c7bf02._.js.map