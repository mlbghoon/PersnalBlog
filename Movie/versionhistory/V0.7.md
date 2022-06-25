2022-06-24 V 0.7
================

css => scss
-------------------
1. input, button, checkBox css => scss
    ```scss
        $size  : (xs: 2, sm: 2.5, md: 3, lg: 4, xl: 5);         
        @each $name, $glyph in $size {
            button.#{$name} {    
                font-size: 6px * $glyph;
                line-height: 9px * $glyph; 
                padding: 0 1.5px * $glyph;
                height: 11px * $glyph;
            }
            input.#{$name} {    
                font-size: 6px * $glyph;
                line-height: 9px * $glyph; 
            }
            label.#{$name} {    
                font-size: 6px * $glyph;
                line-height: 9px * $glyph; 
            }
            .sh-checkbox-div {
                input[type="checkbox"] + label.#{$name} {
                padding-left: 12px * $glyph;
                margin-bottom: 10px * $glyph;
                margin-right: 3px * $glyph;;
                }
            }        
        }
    ```

* scss 로 변경하여 다양한 색상, 사이즈 props로 전달만 하면 되도록 변경 
* 사용가능 color: antiquewhite, aqua, aquamarine, azure, beige, bisque, black, blanchedalmond, blue, blueviolet, brown, burlywood, cadetblue, chartreuse, chocolate, coral, cornflowerblue, cornsilk, crimson, cyan, darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen, darkgrey, darkkhaki, darkmagenta, darkolivegreen, darkorange, darkorchid, darkred, darksalmon, darkseagreen, darkslateblue, darkslategray, darkslategrey, darkturquoise, darkviolet, deeppink, deepskyblue, dimgray, dimgrey, dodgerblue, firebrick, floralwhite, forestgreen, fuchsia, gainsboro, ghostwhite, gold, goldenrod, gray, green, greenyellow, grey, honeydew, hotpink, indianred, indigo, ivory, khaki, lavender, lavenderblush, lawngreen, lemonchiffon, lightblue, lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen, lightgrey, lightpink, lightsalmon, lightseagreen, lightskyblue, lightslategray, lightslategrey, lightsteelblue, lightyellow, lime, limegreen, linen, magenta, maroon, mediumaquamarine, mediumblue, mediumorchid, mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen, mediumturquoise, mediumvioletred, midnightblue, mintcream, mistyrose, moccasin, navajowhite, navy, oldlace, olive, olivedrab, orange, orangered, orchid, palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip, peachpuff, peru, pink, plum, powderblue, purple, red, rosybrown, royalblue, saddlebrown, salmon, sandybrown, seagreen, seashell, sienna, silver, skyblue, slateblue, slategray, slategrey, snow, springgreen, steelblue, tan, teal, thistle, tomato, turquoise, violet, wheat, white, whitesmoke, yellow, yellowgreen;
* 사용가능 size: xs,sm,md,lg,xl

2. checkBox 변경
* 불필요한 props 제거 color,size porps추가
* 클릭 에니메이션 추가

3. ButtonTest, CheckTest, InputTest페이지 추가

4. labal, Radio SelectBox, switch, TextArea 변경
* size porps추가


### 1차 목표 Tab, Tray 추가
### 2차 목표 Dialog 추가
### 3차 목표 공통 코드(dataset) 추가
