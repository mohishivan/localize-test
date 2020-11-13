import { HTMLAttributes } from 'react';
import * as SS from 'styled-system';
import * as CSS from 'csstype';
export type BaseProps = HTMLAttributes<HTMLDivElement>;

export interface BoxProps
    extends BaseProps,
        SS.BackgroundColorProps,
        SS.SpaceProps,
        SS.FontSizeProps,
        SS.BorderProps,
        SS.BorderColorProps,
        SS.BorderRadiusProps,
        SS.DisplayProps,
        SS.WidthProps,
        SS.MaxWidthProps,
        SS.MinWidthProps,
        SS.HeightProps,
        SS.MaxHeightProps,
        SS.MinHeightProps,
        SS.AlignItemsProps,
        SS.AlignContentProps,
        SS.JustifyContentProps,
        SS.FlexWrapProps,
        SS.FlexDirectionProps,
        SS.FlexProps,
        SS.FlexBasisProps,
        SS.JustifySelfProps,
        SS.AlignSelfProps,
        SS.OrderProps,
        SS.PositionProps,
        SS.ZIndexProps,
        SS.TopProps,
        SS.LeftProps,
        SS.RightProps,
        SS.BottomProps {
    color?: CSS.Property.Color;
}
