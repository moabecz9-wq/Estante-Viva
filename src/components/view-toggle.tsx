type ViewToggleProps = {
  view: string
  onSelectView: (view: string) => void
}

export function ViewToggle({ view, onSelectView }: ViewToggleProps) {
  return (
    <div className="toggle">
      <button
        type="button"
        className={view == 'grade' ? 'active' : ''}
        onClick={() => onSelectView('grade')}
      >▦ Grade</button>
      <button
        type="button"
        className={view == 'lista' ? 'active' : ''}
        onClick={() => onSelectView('lista')}
      >☰ Lista</button>
    </div>
  )
}
