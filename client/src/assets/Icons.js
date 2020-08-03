import React from "react";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bell } from "react-icons-kit/feather/bell";
import { bookmark } from "react-icons-kit/feather/bookmark";
import { calendar } from "react-icons-kit/feather/calendar";
import { mapPin } from "react-icons-kit/feather/mapPin";
import {u1F4A3 as bomb} from 'react-icons-kit/noto_emoji_regular/u1F4A3'

import { ICON } from "../components/misc/constant";

export const Home = ({ size = ICON.size }) => <Icon size={size} icon={home} />;
export const User = ({ size = ICON.size }) => <Icon size={size} icon={user} />;
export const Bell = ({ size = ICON.size }) => <Icon size={size} icon={bell} />;
export const Bookmark = ({ size = ICON.size }) => (
  <Icon size={size} icon={bookmark} />
);
export const Calendar = ({ size = ICON.size }) => (
  <Icon size={size} icon={calendar} />
);
export const MapPin = ({ size = ICON.size }) => (
  <Icon size={size} icon={mapPin} />
);

export const Bomb = ({ size = ICON.size }) => (
  <Icon size={size} icon={bomb} />
);

