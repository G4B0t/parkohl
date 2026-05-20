import Button from '@components/Button'
import { ButtonVariant } from '@components/Button/enums'
import Icon from '@components/Icon'
import { IconName } from '@components/Icon/enums'
import { ChangeEvent, FormEvent, memo, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '@store/useAppStore'

import { SOCIAL_LOGIN_OPTIONS } from './constants'
import {
  BrandAccent,
  BrandCopy,
  BrandDescription,
  BrandIcon,
  BrandMark,
  BrandPanel,
  BrandTitle,
  Checkbox,
  Divider,
  FieldGroup,
  FieldShell,
  FormHeader,
  FormOptions,
  FormPanel,
  FormSubtitle,
  FormTitle,
  IconAction,
  LockBadge,
  LoginCard,
  LoginPage,
  RememberButton,
  SignUpCopy,
  SocialGrid,
  TextInput,
  TextLink,
} from './styles'
import { LoginFormState, SocialLoginProvider } from './types'

const Login = () => {
  const loginAsDemo = useAppStore((state) => state.loginAsDemo)
  const navigate = useNavigate()
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    rememberMe: true,
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const passwordInputType = useMemo(
    () => (showPassword ? 'text' : 'password'),
    [showPassword],
  )

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((currentState) => ({
        ...currentState,
        email: event.target.value,
      }))
    },
    [],
  )

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((currentState) => ({
        ...currentState,
        password: event.target.value,
      }))
    },
    [],
  )

  const handleRememberToggle = useCallback(() => {
    setFormState((currentState) => ({
      ...currentState,
      rememberMe: !currentState.rememberMe,
    }))
  }, [])

  const handlePasswordVisibilityToggle = useCallback(() => {
    setShowPassword((currentValue) => !currentValue)
  }, [])

  const handleLogin = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    loginAsDemo()
    navigate('/home')
  }, [loginAsDemo, navigate])

  const getSocialIconName = useCallback((provider: SocialLoginProvider) => {
    return provider === 'Google' ? IconName.google : IconName.microsoft
  }, [])

  return (
    <LoginPage>
      <BrandPanel>
        <BrandMark>
          <BrandIcon>
            <Icon name={IconName.parkohl} size={30} />
          </BrandIcon>
          PARKOHL
        </BrandMark>
        <BrandCopy>
          <BrandTitle>
            Bienvenido
            <BrandAccent>de vuelta</BrandAccent>
          </BrandTitle>
          <BrandDescription>
            Inicia sesion para continuar gestionando tu informacion de manera
            segura.
          </BrandDescription>
        </BrandCopy>
      </BrandPanel>

      <FormPanel>
        <LoginCard onSubmit={handleLogin}>
          <LockBadge>
            <Icon name={IconName.lock} size={44} />
          </LockBadge>
          <FormHeader>
            <FormTitle>Iniciar sesion</FormTitle>
            <FormSubtitle>Ingresa tus credenciales para acceder</FormSubtitle>
          </FormHeader>

          <FieldGroup>
            Correo electronico
            <FieldShell>
              <Icon name={IconName.email} />
              <TextInput
                autoComplete="email"
                inputMode="email"
                onChange={handleEmailChange}
                placeholder="ejemplo@correo.com"
                type="email"
                value={formState.email}
              />
            </FieldShell>
          </FieldGroup>

          <FieldGroup>
            Contrasena
            <FieldShell $hasAction>
              <Icon name={IconName.lock} />
              <TextInput
                autoComplete="current-password"
                onChange={handlePasswordChange}
                placeholder="Ingresa tu contrasena"
                type={passwordInputType}
                value={formState.password}
              />
              <IconAction
                aria-label="Mostrar u ocultar contrasena"
                onClick={handlePasswordVisibilityToggle}
                type="button">
                <Icon name={IconName.eye} />
              </IconAction>
            </FieldShell>
          </FieldGroup>

          <FormOptions>
            <RememberButton onClick={handleRememberToggle} type="button">
              <Checkbox $isChecked={formState.rememberMe}>
                {formState.rememberMe && <Icon name={IconName.check} size={18} />}
              </Checkbox>
              Recordarme
            </RememberButton>
            <TextLink href="/forgot-password">Olvidaste tu contrasena?</TextLink>
          </FormOptions>

          <Button fullWidth type="submit">
            Iniciar sesion
          </Button>

          <Divider>o continua con</Divider>

          <SocialGrid>
            {SOCIAL_LOGIN_OPTIONS.map((provider) => (
              <Button
                key={provider}
                type="button"
                variant={ButtonVariant.secondary}>
                <Icon name={getSocialIconName(provider)} />
                {provider}
              </Button>
            ))}
          </SocialGrid>

          <SignUpCopy>
            No tienes una cuenta? <TextLink href="/register">Registrate</TextLink>
          </SignUpCopy>
        </LoginCard>
      </FormPanel>
    </LoginPage>
  )
}

export default memo(Login)
