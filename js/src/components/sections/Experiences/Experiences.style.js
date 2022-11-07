import { Box, Container, Divider, Stack } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { styled } from '@mui/system';

export const UiRoot = styled(Container)`
  padding: 100px 20px;
  text-align: center;
`;

export const UiExperiences = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UiExperience = styled(Box)`
  display: flex;
  width: 100%;
  :not(:last-child) {
    min-height: 100px;
  };
`;

export const UiYear = styled('span')`
  flex: 0.4;
  min-width: 60px;
  text-align: right;
`;

export const UiDivider = styled(Divider)(({ mobile }) => ({
  width: '1px',
  background: '#CCC',
  borderRadius: '10%',
  margin: mobile === 'true' ? '0 30px 0 60px' : '0 60px 0 80px',
}));

export const UiAchievement = styled(Stack)(({ mobile }) => ({
  flex: mobile === 'true' ? '1' : '0.6',
  fontSize: '1rem',
}));

export const UiMuiCircle = styled(Circle)({
  color: '#FE9010',
  fontSize: '1rem',
});

export const UiAchievementTitle = styled('span')`
`;

export const UiAchievementSubTitle = styled('span')`
`;