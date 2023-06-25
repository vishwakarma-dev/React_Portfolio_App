import { SvgIcon } from '@mui/material';

export interface IVSSvgIconProps {
    src : string ,
    alt : string 
}

export function VSSvgIcon (props: IVSSvgIconProps) {
    const {src, alt} = props;
  return (
    <SvgIcon {...props}>
      <img src={src} alt={alt} />
    </SvgIcon>
  );
}

export interface ICustomIconProps {
  src : string ,
  alt : string
}

export function CustomIcon (props: ICustomIconProps) {
  const {src, alt} = props;
  
  return (
    <img src={src} alt={alt} />
  );
}
