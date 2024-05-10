import { React } from "deps.ts";
import { fonts } from "packages/bfDs/const.tsx";
import Icon, { IconType } from "packages/bfDs/Icon.tsx";
import { Link } from "packages/client/components/Link.tsx";
import Tooltip, {
  TooltipJustification,
  TooltipMenu,
  TooltipPosition,
} from "packages/bfDs/Tooltip.tsx";
import { Spinner } from "packages/bfDs/Spinner.tsx";
import Progress from "packages/bfDs/Progress.tsx";
// import FeatureMenu from "packages/client/components/FeatureMenu.tsx";

export type ButtonSizeType = "xlarge" | "large" | "medium" | "small";

export type ButtonKind =
  | "primary"
  | "secondary"
  | "alert"
  | "success"
  | "filled"
  | "filledAlert"
  | "filledSuccess"
  | "outline"
  | "outlineAlert"
  | "outlineSuccess"
  | "overlay"
  | "overlayDark"
  | "accent"
  | "gradientOverlay";

type ButtonType = {
  xstyle?: {
    borderRadius?: "0" | "6px 0 0 6px" | "0 6px 6px 0";
    flex?: string;
    marginInlineEnd?: number;
    marginInlineStart?: number;
  };
  disabled?: boolean;
  iconLeft?: IconType;
  iconRight?: IconType;
  // if link is provided, the button will be rendered as a Link
  link?: string;
  // if href is provided, the button will be rendered as an anchor tag
  href?: string;
  hrefTarget?: string;
  onClick?: (e: React.FormEvent) => void;
  progress?: number;
  shadow?: boolean;
  // use showSpinner to show a spinner with an icon button
  // doesn't work with overlay or overlayDark or outline
  showSpinner?: boolean;
  size?: ButtonSizeType;
  subtext?: string;
  testId?: string; // used to identify the button in posthog
  text?: string | null;
  tooltip?: string | React.ReactNode;
  tooltipMenu?: TooltipMenu[]; // | React.ReactElement<typeof FeatureMenu>;
  tooltipMenuDropdown?: TooltipMenu[];
  tooltipPosition?: TooltipPosition;
  tooltipJustification?: TooltipJustification;
  type?: "button" | "submit" | "reset";
  kind?: ButtonKind;
  role?: string;
};

const styles: Record<string, React.CSSProperties> = {
  textStyle: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: "0.9em",
  },
  iconStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  iconSpinner: {
    position: "absolute",
    top: -1,
    left: -1,
  },
  disabledStyle: {
    opacity: 0.3,
    cursor: "not-allowed",
  },
  dropdownArrow: {
    marginRight: -6,
  },
  dropdownArrowIconButton: {
    position: "absolute",
    bottom: 0,
    right: -4,
    height: 15,
    width: 15,
    paddingTop: 2,
    borderRadius: "50%",
    boxSizing: "border-box",
  },
  shadow: {
    boxShadow: "0 5px 10px rgba(0,0,0,.15)",
    borderRadius: 6,
  },
};

export function Button({
  xstyle,
  disabled,
  iconLeft,
  iconRight,
  link,
  href,
  hrefTarget,
  onClick,
  progress,
  shadow,
  showSpinner,
  size = "large",
  subtext,
  testId,
  text,
  tooltip,
  tooltipMenu,
  tooltipMenuDropdown,
  tooltipPosition = "top",
  tooltipJustification = "center",
  kind = "primary",
  type = "button",
  role: passedRole,
}: ButtonType) {
  const [hover, setHover] = React.useState(false);

  const role = passedRole ?? text;

  const buttonSize = {
    xlarge: { fontSize: 16, minHeight: 38, padding: "14px 30px" },
    large: { fontSize: 14, minHeight: 32, padding: "0px 14px" },
    medium: { fontSize: 12, minHeight: 26, padding: "0px 8px" },
    small: { fontSize: 10, minHeight: 20, padding: "0px 6px" },
  };
  const iconButtonSize = {
    xlarge: { width: 64, height: 64 },
    large: { width: 40, height: 40 },
    medium: { width: 32, height: 32, padding: "0 2px" },
    small: { width: 22, height: 22, padding: "0 2px" },
  };
  const iconSize: Record<string, 10 | 12 | 16 | 24> = {
    xlarge: 24,
    large: 16,
    medium: 16,
    small: 12,
  };
  const baseButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: "none",
    gap: 6,
    color: "var(--textOnPrimary)",
    backgroundColor: hover
      ? "var(--primaryButtonHover)"
      : "var(--primaryButton)",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: hover ? "var(--primaryButtonHover)" : "var(--primaryButton)",
    fontWeight: "bold",
    fontFamily: fonts.fontFamily,
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    position: "relative",
    ...buttonSize[size],
    ...xstyle,
  };
  const baseIconButtonStyle: React.CSSProperties = {
    backgroundColor: hover
      ? "var(--backgroundIconHover)"
      : "var(--backgroundIcon)",
    borderRadius: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: hover ? "var(--backgroundIconHover)" : "var(--backgroundIcon)",
    color: "var(--primaryButton)",
    cursor: "pointer",
    textAlign: "center",
    position: "relative",
    ...iconButtonSize[size],
    ...xstyle,
  };
  const buttonStyle = {
    primary: {
      ...baseButtonStyle,
    },
    secondary: {
      ...baseButtonStyle,
      backgroundColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
      color: "var(--textOnSecondary)",
      borderColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
    },
    alert: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--alertHover)" : "var(--alert)",
      color: "var(--textOnAlert)",
      borderColor: hover ? "var(--alertHover)" : "var(--alert)",
    },
    success: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--successHover)" : "var(--success)",
      color: "var(--textOnSuccess)",
      borderColor: hover ? "var(--successHover)" : "var(--success)",
    },
    filled: {
      ...baseButtonStyle,
      backgroundColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
      borderColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
      color: "var(--textOnSecondary)",
    },
    filledAlert: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--alertHover)" : "var(--alert)",
      borderColor: hover ? "var(--alertHover)" : "var(--alert)",
      color: "var(--textOnAlert)",
    },
    filledSuccess: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--successHover)" : "var(--success)",
      borderColor: hover ? "var(--successHover)" : "var(--success)",
      color: "var(--textOnSuccess)",
    },
    outline: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      color: "var(--text)",
      borderColor: hover
        ? "var(--secondaryButton)"
        : "var(--secondaryButtonHover)",
    },
    outlineAlert: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      color: hover ? "var(--alertHover)" : "var(--alert)",
      borderColor: hover ? "var(--alertHover)" : "var(--background)",
    },
    outlineSuccess: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      color: hover ? "var(--successHover)" : "var(--success)",
      borderColor: hover ? "var(--successHover)" : "var(--background)",
    },
    overlay: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "transparent",
      color: "var(--text)",
      borderColor: hover ? "var(--outlineHover)" : "transparent",
    },
    overlayDark: {
      ...baseButtonStyle,
      backgroundColor: hover ? "var(--overlayDarkHover)" : "transparent",
      color: "var(--background)",
      borderColor: hover ? "var(--overlayDarkHover)" : "transparent",
    },
    accent: {
      ...baseButtonStyle,
      backgroundColor: hover
        ? "var(--accentButtonHover)"
        : "var(--accentButton)",
      color: "var(--textOnAccent)",
      borderColor: hover ? "var(--accentButtonHover)" : "var(--accentButton)",
    },
    gradientOverlay: {
      ...baseButtonStyle,
    },
  };
  const iconButtonStyle = {
    primary: {
      ...baseIconButtonStyle,
    },
    secondary: {
      ...baseIconButtonStyle,
      color: "var(--textOnSecondary)",
    },
    alert: {
      ...baseIconButtonStyle,
      color: "var(--alert)",
    },
    success: {
      ...baseIconButtonStyle,
      color: "var(--success)",
    },
    filled: {
      ...baseIconButtonStyle,
      backgroundColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
      borderColor: hover
        ? "var(--secondaryButtonHover)"
        : "var(--secondaryButton)",
      color: "var(--textOnSecondary)",
    },
    filledAlert: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--alertHover)" : "var(--alert)",
      borderColor: hover ? "var(--alertHover)" : "var(--alert)",
      color: "var(--textOnAlert)",
    },
    filledSuccess: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--successHover)" : "var(--success)",
      borderColor: hover ? "var(--successHover)" : "var(--success)",
      color: "var(--textOnSuccess)",
    },
    outline: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      borderColor: hover
        ? "var(--secondaryButton)"
        : "var(--secondaryButtonHover)",
      color: "var(--text)",
    },
    outlineAlert: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      borderColor: hover ? "var(--alertHover)" : "var(--background)",
      color: hover ? "var(--alertHover)" : "var(--alert)",
    },
    outlineSuccess: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "var(--background)",
      borderColor: hover ? "var(--successHover)" : "var(--background)",
      color: hover ? "var(--successHover)" : "var(--success)",
    },
    overlay: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--outlineHover)" : "transparent",
      borderColor: hover ? "var(--outlineHover)" : "transparent",
      color: "var(--textSecondary)",
    },
    overlayDark: {
      ...baseIconButtonStyle,
      backgroundColor: hover ? "var(--overlayDarkHover)" : "var(--overlayDark)",
      borderColor: hover ? "var(--overlayDarkHover)" : "var(--overlayDark)",
      color: "var(--background)",
    },
    accent: {
      ...baseIconButtonStyle,
      color: "var(--accent)",
    },
    gradientOverlay: {
      ...baseIconButtonStyle,
      background: hover ? "var(--marketingGradient)" : "transparent",
      color: hover ? "var(--text)" : "var(--textSecondary)",
    },
  };

  const onHover = () => setHover(true);
  const onLeave = () => setHover(false);

  const isIconButton = !text && !subtext;
  const iconColor = isIconButton
    ? iconButtonStyle[kind].color
    : buttonStyle[kind].color;

  const disableButton = disabled;
  const shouldShowSpinner = (showSpinner || progress != null) &&
    kind !== "overlay" &&
    kind !== "overlayDark" && kind !== "outline";
  const percent = progress != null ? Math.round(progress) : 0;

  const button = (
    <button
      disabled={disableButton}
      type={type}
      style={{
        ...(isIconButton ? iconButtonStyle[kind] : buttonStyle[kind]),
        ...(disableButton ? styles.disabledStyle : {}),
        ...(shadow && styles.shadow),
      }}
      onClick={disableButton || link != null || href != null
        ? () => null
        : onClick}
      onMouseOver={disableButton ? () => null : onHover}
      onMouseOut={disableButton ? () => null : onLeave}
      data-bf-icon={iconLeft}
      data-bf-testid={testId}
      role={role ?? text ?? "button"}
    >
      {shouldShowSpinner && isIconButton && (
        <div style={styles.iconSpinner}>
          {progress != null && progress > 0
            ? (
              <Progress
                size={iconButtonSize[size].width}
                progress={progress}
                backgroundColor={iconButtonStyle[kind].backgroundColor}
                spinnerColor={iconButtonStyle[kind].color}
              />
            )
            : (
              <Spinner
                size={iconButtonSize[size].width}
                backgroundColor={iconButtonStyle[kind].backgroundColor}
                spinnerColor={iconButtonStyle[kind].color}
              />
            )}
        </div>
      )}
      {shouldShowSpinner && !isIconButton
        ? (
          <div style={styles.iconStyle}>
            {progress != null && progress > 0
              ? (
                <Progress
                  size={iconSize[size]}
                  progress={progress}
                  backgroundColor={buttonStyle[kind].backgroundColor}
                  spinnerColor={buttonStyle[kind].color}
                />
              )
              : (
                <Spinner
                  size={iconSize[size]}
                  backgroundColor={buttonStyle[kind].backgroundColor}
                  spinnerColor={buttonStyle[kind].color}
                />
              )}
          </div>
        )
        : iconLeft && (
          <div style={styles.iconStyle}>
            {progress && progress > 0
              ? <div className="mono" style={{ fontSize: 12 }}>{percent}%</div>
              : (
                <Icon name={iconLeft} color={iconColor} size={iconSize[size]} />
              )}
          </div>
        )}
      {!isIconButton && (
        <div style={styles.textStyle}>
          <div>{text}</div>
          {subtext && <div style={{ fontSize: "0.7em" }}>{subtext}</div>}
        </div>
      )}
      {iconRight && (
        <div style={styles.iconStyle}>
          <Icon name={iconRight} color={iconColor} size={iconSize[size]} />
        </div>
      )}
      {tooltipMenuDropdown && (
        <div
          style={{
            ...(isIconButton
              ? styles.dropdownArrowIconButton
              : styles.dropdownArrow),
            backgroundColor: isIconButton
              ? iconButtonStyle[kind].borderColor
              : buttonStyle[kind].backgroundColor,
          }}
        >
          <Icon name="down-arrow" color={iconColor} size={12} />
        </div>
      )}
    </button>
  );

  let buttonToRender = button;
  if (link != null) {
    buttonToRender = (
      <Link
        to={link}
        style={{ display: "block" }}
      >
        {button}
      </Link>
    );
  }

  if (href != null) {
    buttonToRender = (
      <a
        href={href}
        target={hrefTarget}
      >
        {button}
      </a>
    );
  }

  return (tooltip || tooltipMenu || tooltipMenuDropdown)
    ? (
      <Tooltip
        menu={tooltipMenu ?? tooltipMenuDropdown}
        justification={tooltipJustification}
        position={tooltipPosition}
        text={tooltip}
      >
        {buttonToRender}
      </Tooltip>
    )
    : buttonToRender;
}
