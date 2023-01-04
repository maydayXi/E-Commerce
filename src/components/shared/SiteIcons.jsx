import React from "react";
import styled from "@emotion/styled";
import { ExpandMore } from "@mui/icons-material";
import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";
import {
    FaWhatsapp,
    FaInstagram,
    FaRegHeart,
    FaRegComment,
    FaRegBookmark,
} from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IoPaperPlaneOutline } from "react-icons/io5";

// icon size style
const iconSize = {
    fontSize: "1rem",
};

// header icon style
const ms1 = {
    marginLeft: "1rem",
};

// footer icon style
const me1 = {
    marginRight: "1rem",
};

/**
 * NewChar component
 */
const NewChar = styled("span")((theme) => ({
    fontSize: ".75rem",
    fontWeight: "bold",
}));

/**
 * SearchIcon component
 * @returns Search icon
 */
const SearchIcon = () => <BiSearch style={{ ...iconSize }} />;

/**
 * UserIcon component
 * @returns User icon
 */
const UserIcon = () => <BiUser style={{ ...iconSize, ...ms1 }} />;

/**
 * ShoppingBag component
 * @returns Shopping bag icon
 */
const ShoppingBagIcon = () => <BiShoppingBag style={{ ...iconSize, ...ms1 }} />;

/**
 * HeartIcon component
 * @returns Heart icon
 */
const HeartIcon = () => <FaRegHeart style={me1} />;

/**
 * CommentIcon style
 * @returns Comment icon
 */
const CommentIcon = () => <FaRegComment style={me1} />;

/**
 * PlaneIcon component
 * @returns Plane icon
 */
const PlaneIcon = () => <IoPaperPlaneOutline />;

/**
 * BookmarkIcon component
 * @returns Bookmark icon
 */
const BookmarkIcon = () => <FaRegBookmark />;

/**
 * WhatsappIcon component
 * @returns Whatsapp icon
 */
const WhatsappIcon = () => <FaWhatsapp style={me1} />;

/**
 * InstagramIcon component
 * @returns Instagram icon
 */
const InstagramIcon = () => <FaInstagram style={me1} />;

/**
 * TelegramIcon component
 * @returns Telegram icon
 */
const TelegramIcon = () => <TbBrandTelegram style={me1} />;

/**
 * StarIcon component
 * @returns star icon
 */
const StarIcon = () => <StarBorderOutlinedIcon sx={iconSize} />;

/**
 * NewIcon component
 * @returns NewChar component
 */
const NewIcon = () => <NewChar>New</NewChar>;

/**
 * ExpandIcon component
 * @returns ExpandMore icon
 */
const ExpandIcon = () => <ExpandMore />;

/**
 * DecreaseIcon component
 * @returns Decrease icon
 */
const DecreaseIcon = () => <KeyboardArrowLeftIcon />;

/**
 * IncreaseIcon component
 * @returns Increase icon
 */
const IncreaseIcon = () => <KeyboardArrowRightIcon />;

/**
 * SiteIcons Object
 */
const SiteIcons = {
    Search: SearchIcon,
    User: UserIcon,
    ShoppingBag: ShoppingBagIcon,
    Whatsapp: WhatsappIcon,
    Heart: HeartIcon,
    Comment: CommentIcon,
    Plane: PlaneIcon,
    Bookmark: BookmarkIcon,
    Instagram: InstagramIcon,
    Telegram: TelegramIcon,
    Expand: ExpandIcon,
    Star: StarIcon,
    New: NewIcon,
    Decrease: DecreaseIcon,
    Increase: IncreaseIcon,
};

export default SiteIcons;
