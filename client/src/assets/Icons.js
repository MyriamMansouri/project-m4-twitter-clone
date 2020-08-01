import React from "react";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/feather/home";
import { user } from "react-icons-kit/feather/user";
import { bell } from "react-icons-kit/feather/bell";
import { bookmark } from "react-icons-kit/feather/bookmark";

import { ICON } from '../components/misc/constant'

export const Home = () => <Icon size={ICON.size} icon={home} />;
export const User = () => <Icon size={ICON.size} icon={user} />;
export const Bell = () => <Icon size={ICON.size} icon={bell} />;
export const Bookmark = () => <Icon size={ICON.size} icon={bookmark} />;