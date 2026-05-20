type LoadingProps = {
  label?: string
}

const Loading = ({ label = 'Loading' }: LoadingProps) => {
  return <div className="loading-state">{label}</div>
}

export default Loading
