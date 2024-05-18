import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Inbox, Mail } from '@mui/icons-material';

function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
