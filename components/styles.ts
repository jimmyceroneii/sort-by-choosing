import { CSSProperties } from 'react';

type Styles = Record<string, CSSProperties>;

export const styles: Styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--spacing-lg)',
    position: 'relative',
    zIndex: 1,
  },

  inputSection: {
    maxWidth: '560px',
    width: '100%',
    textAlign: 'center',
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '2.5rem',
    fontWeight: 500,
    marginBottom: 'var(--spacing-xs)',
    color: 'var(--color-text)',
  },

  subtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    marginBottom: 'var(--spacing-xl)',
    fontWeight: 400,
  },

  textareaWrapper: {
    position: 'relative',
    marginBottom: 'var(--spacing-md)',
  },

  textarea: {
    width: '100%',
    height: '180px',
    padding: 'var(--spacing-md)',
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    border: '1px solid var(--color-card-border)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--color-card-bg)',
    resize: 'none',
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
    outline: 'none',
    lineHeight: 1.7,
  },

  textareaFocus: {
    borderColor: 'var(--color-accent)',
    boxShadow: '0 0 0 3px rgba(198, 93, 59, 0.1)',
  },

  error: {
    color: '#C65D3B',
    fontSize: '0.875rem',
    marginBottom: 'var(--spacing-sm)',
    fontWeight: 500,
  },

  submitButton: {
    backgroundColor: 'var(--color-text)',
    color: 'white',
    padding: '16px 40px',
    fontSize: '0.95rem',
    fontWeight: 500,
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all var(--transition-normal)',
    letterSpacing: '0.02em',
  },

  submitButtonHover: {
    backgroundColor: 'var(--color-accent)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(26, 26, 26, 0.15)',
  },

  comparisonContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--spacing-lg)',
    position: 'relative',
    zIndex: 1,
  },

  progressWrapper: {
    marginBottom: 'var(--spacing-xl)',
    textAlign: 'center',
  },

  progressLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--color-text-muted)',
    marginBottom: 'var(--spacing-xs)',
    fontWeight: 500,
  },

  progressBar: {
    width: '200px',
    height: '3px',
    backgroundColor: 'var(--color-card-border)',
    borderRadius: '2px',
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: 'var(--color-accent)',
    transition: 'width var(--transition-normal)',
    borderRadius: '2px',
  },

  cardsContainer: {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  cardWrapper: {
    flex: '1 1 280px',
    maxWidth: '340px',
    minHeight: '220px',
  },

  card: {
    height: '100%',
    minHeight: '220px',
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--color-card-bg)',
    border: '1px solid var(--color-card-border)',
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all var(--transition-normal)',
    boxShadow: '0 2px 12px var(--color-shadow)',
    position: 'relative',
    overflow: 'hidden',
  },

  cardHover: {
    transform: 'translateY(-8px) rotate(-1deg)',
    boxShadow: '0 16px 40px var(--color-shadow-hover)',
    borderColor: 'var(--color-accent)',
  },

  cardText: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.35rem',
    fontWeight: 500,
    color: 'var(--color-text)',
    lineHeight: 1.4,
    margin: 0,
  },

  cardHint: {
    position: 'absolute',
    bottom: 'var(--spacing-sm)',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-text-muted)',
    opacity: 0,
    transition: 'opacity var(--transition-fast)',
  },

  resultsContainer: {
    maxWidth: '600px',
    width: '100%',
    padding: 'var(--spacing-xl) 0',
  },

  resultsHeader: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-xl)',
  },

  resultsTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.75rem',
    marginBottom: 'var(--spacing-xs)',
  },

  resultsSubtitle: {
    color: 'var(--color-text-muted)',
    fontSize: '0.9rem',
  },

  rankList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  rankItem: {
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-sm)',
    backgroundColor: 'var(--color-card-bg)',
    border: '1px solid var(--color-card-border)',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-fast)',
  },

  rankNumber: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-bg)',
    borderRadius: '50%',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginRight: 'var(--spacing-md)',
    flexShrink: 0,
  },

  rankName: {
    flex: 1,
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    fontWeight: 500,
  },

  rankVotes: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
    marginLeft: 'var(--spacing-sm)',
    fontWeight: 500,
  },

  rankBar: {
    height: '8px',
    backgroundColor: 'var(--color-accent)',
    borderRadius: '4px',
    marginLeft: 'var(--spacing-md)',
    minWidth: '40px',
    maxWidth: '120px',
    transition: 'width var(--transition-normal)',
  },

  restartButton: {
    display: 'block',
    margin: 'var(--spacing-xl) auto 0',
    padding: '14px 32px',
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    border: '1px solid var(--color-card-border)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all var(--transition-normal)',
  },

  vsBadge: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '50px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    zIndex: 10,
    boxShadow: '0 4px 12px rgba(198, 93, 59, 0.3)',
  },
};
