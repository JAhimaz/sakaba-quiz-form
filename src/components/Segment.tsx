import styled from "@emotion/styled";

type SegmentProps = {
  row?: boolean;
  gap?: string;
  padding?: string;
  justify?: string;
  align?: string;
  mobileFriendly?: boolean;
}

const Segment = styled.section((props : SegmentProps) => ({
  display: 'flex',
  flexDirection: props.row ? 'row' : 'column',
  gap: props.gap ? props.gap : '0',
  padding: props.padding ? props.padding : '0',
  justifyContent: props.justify ? props.justify : 'flex-start',
  alignItems: props.align ? props.align : 'flex-start',
}), (props : SegmentProps) => props.mobileFriendly && ({
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  }
}))

export default Segment