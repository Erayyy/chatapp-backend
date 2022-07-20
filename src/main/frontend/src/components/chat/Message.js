import React from 'react'

export const Message = props => {

  const nameTypography = <div style={props.direction === "server" ? styleServerName : styleName}> {props.name} </div>
  const image = <img src={props.image} alt={props.image} style={styleImage} />

  return (
    <>
      <div style={props.direction === "left" ? styleLeft : props.direction === "right" ? styleRight : styleServer}>
          { props.direction === "right" ? null : nameTypography }
          { props.image == null ? null : image }
          { props.image == null ? null : <br/> }
          { props.text }
      </div>
      <br/>
    </>
  )
}

export default Message;

const styleImage = {
  maxWidth: "100%",
  maxHeight: "100%"
}

const styleServer = ({
  margin: "auto",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "100%",
  overflow: "hidden",
  position: "relative",
  width: "fit-content",
  maxWidth: "60%",
  minWidth: "5em",
  backgroundColor: "grey",
  padding: "0.3em",
  wordWrap: "break-word",
  whiteSpace: "break-spaces",
  boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)",
  '::before': {
      content: `''`,
      whiteSpace: "pre",
      width: "0",
      height: "0",
      bottom: "100%",
      left: "1.5em",
      border: ".75rem solid transparent",
      borderTop: "none",
      borderBottomColor: "#fff",
      filter: "drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))",
  },
}
)

const styleLeft = ({
  fontSize: "100%",
  overflow: "hidden",
  marginRight: "auto",
  marginLeft: "1em",
  position: "relative",
  width: "fit-content",
  maxWidth: "60%",
  minWidth: "5em",
  backgroundColor: "white",
  padding: "0.5em 0.75em",
  wordWrap: "break-word",
  borderRadius: "1rem",
  whiteSpace: "break-spaces",
  boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)",
  '::before': {
      content: `''`,
      whiteSpace: "pre",
      width: "0",
      height: "0",
      bottom: "100%",
      left: "1.5em",
      border: ".75rem solid transparent",
      borderTop: "none",
      borderBottomColor: "#fff",
      filter: "drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))",
  },
}
)

const styleRight = ({
  fontSize: "100%",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "1em",
  position: "relative",
  width: "fit-content",
  maxWidth: "60%",
  minWidth: "auto",
  backgroundColor: "white",
  padding: "0.5em 0.75em",
  wordWrap: "break-word",
  borderRadius: "1rem",
  whiteSpace: "break-spaces",
  boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)",
  '::before': {
      content: `''`,
      whiteSpace: "pre",
      position: "absolute",
      maxWidth: "50em",
      minWidth: "1em",
      width: "0",
      height: "0",
      bottom: "100%",
      right: "1.5em",
      border: ".75rem solid transparent",
      borderTop: "none",
      borderBottomColor: "#fff",
      filter: "drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))",
  },
}
)

const styleName = ({
  fontSize: "smaller",
  color: "#00ADB5",
  position: "relative",
})

const styleServerName = {
  fontSize: "smaller",
  color: "rgba(0, 0, 0, 0.87)",
  position: "relative",
}