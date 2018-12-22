import React from "react"
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom"

interface PrivateRouteProps extends RouteProps {
  component: any;
  isAuth: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isAuth, ...rest } = props

  return (
    <Route
      {...rest}
      render={(routeProps: RouteComponentProps<any>): React.ReactNode =>
        true ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
