'use client'

import ExportedImage from "next-image-export-optimizer";
import BurgerMenu from "./BurgerMenu";
import React, {useState, useEffect, useRef} from "react";
import { Box, Menu, MenuItem } from "@mui/material"
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import PelicanLogo from "../../public/images/logos/OSG-logo.svg"
import {Typography, useTheme, useMediaQuery} from "@mui/material";
import {ArrowDropUp, ArrowDropDown} from "@mui/icons-material";


const DropdownMenu = ({name, children, anchorEl, handleClose, id}: {name: string, children: React.ReactNode, anchorEl: HTMLElement | null, handleClose: () => void, id: string}) => {
	return <Box>
		{children}
	</Box>
}

type HeaderCategory = "about" | "services" | "community" | "docs";


const Header = () => {

	const [openCategory, setOpenCategory] = useState<HeaderCategory | undefined>(undefined);

	const

	return (
		<Box>
			<Box sx={{
				display: "flex",
				justifyContent: "space-between",
				padding: "1rem",
				zIndex: "1",
				width: "100%",
				overflow: "hidden",
				backgroundColor: "secondary.main",
			}}>
				<Box display={"flex"}>
					<Link href={"/"}>
						<Box style={{display: "flex"}}>
							<ExportedImage src={PelicanLogo} alt={"OSG Logo"} height={36}/>
							<Typography variant={"h5"} pl={1} my={"auto"}>OSG</Typography>
						</Box>
					</Link>

				</Box>
				<Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
					<Link
							href={"https://docs.pelicanplatform.org/"}

							target="_blank"
					>
						<DescriptionIcon
								fontSize="large"
								sx={{
									":hover": {
										transform: "scale(1.15)",
										transition: "transform 0.3s",
									},
									marginTop: "2px"
								}}/>
					</Link>
					<Link href={"https://github.com/PelicanPlatform"} target="_blank">
						<GitHubIcon
								fontSize="large"
								sx={{
									":hover": {
										transform: "scale(1.15)",
										transition: "transform 0.3s",
									},
									marginLeft: "1rem"
								}} />
					</Link>
				</Box>
			</Box>
			<Box>
				<
			</Box>
		</Box>
	)
}

export default Header;