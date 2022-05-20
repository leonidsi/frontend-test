import * as React from 'react';
import styled from "styled-components";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Card from "./Card";

export default function CardContainer({
    hasPopOver,
    cardTitle,
    cardSelected,
    popOverTitle,
    popOverContent,
    popOverPlacement = 'top'
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const placements = {
    top: {
      anchor: {
        vertical: 'top',
        horizontal: 'center',
      },
      transform: {
        vertical: 'bottom',
        horizontal: 'center',
      }
    },
    right: {
      anchor: {
        vertical: 'center',
        horizontal: 'right',
      },
      transform: {
        vertical: 'center',
        horizontal: 'left',
      }
    },
    bottom: {
      anchor: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      transform: {
        vertical: 'top',
        horizontal: 'center',
      }
    },
    left: {
      anchor: {
        vertical: 'center',
        horizontal: 'left',
      },
      transform: {
        vertical: 'center',
        horizontal: 'right',
      }
    },
  }

  const handlePopoverOpen = (event) => {
    console.log(event.currentTarget);
    if (hasPopOver) {
      setAnchorEl(event.currentTarget)
    }
  };

  const handlePopoverClose = () => {
    console.log(event.currentTarget);
    if (hasPopOver) {
      setAnchorEl(null)
    }
  };

  let open = Boolean(anchorEl);

  return (
    <div
    >
      <Card
        title={cardTitle}
        selected={cardSelected}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={placements[popOverPlacement]['anchor']}
        transformOrigin={placements[popOverPlacement]['transform']}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <Typography sx={{p: 1, borderBottom: "solid 1px #000", width: "90%"}}>{popOverTitle}</Typography>
          <Typography sx={{p: 1}}>{popOverContent}</Typography>
        </div>
      </Popover>
    </div>
  );
}
