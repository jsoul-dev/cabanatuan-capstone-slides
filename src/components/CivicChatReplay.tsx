export default function CivicChatReplay() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 780,
        marginInline: 'auto',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--hair-2)',
        background: 'linear-gradient(180deg, rgba(13, 20, 16, 0.95) 0%, rgba(6, 9, 7, 0.98) 100%)',
        boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9)',
        overflow: 'hidden',
      }}
    >
      {/* Console Top Bar */}
      <div
        style={{
          padding: '12px 18px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid var(--hair-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)' }}>
            Cabanatuan Civic AI Chatbot Assistant (Gemini 3.5 Flash-Lite RAG)
          </span>
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px 10px',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            fontSize: '11px',
            fontWeight: 700,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
          Online · SQLite WAL Vector Indexed
        </div>
      </div>

      {/* Message Stream */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* User Bubble */}
        <div style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
          <div style={{ fontSize: '11px', color: 'var(--fg-faint)', textAlign: 'right', marginBottom: '4px' }}>
            Citizen (Barangay Aduas Centro)
          </div>
          <div
            style={{
              padding: '12px 18px',
              borderRadius: '16px 16px 4px 16px',
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 1.45,
              boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)',
            }}
          >
            Ano po ang multa sa pagsusunog ng basura sa bakuran sa Barangay Aduas Centro?
          </div>
        </div>

        {/* Assistant Response */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '92%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              AI
            </div>
            <span style={{ fontSize: '11px', color: 'var(--fg-muted)', fontWeight: 600 }}>
              Cabanatuan City Ordinance AI · Verified Citations
            </span>
          </div>

          <div
            style={{
              padding: '16px 20px',
              borderRadius: '16px 16px 16px 4px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--hair-2)',
              color: 'var(--fg)',
              fontSize: '13.5px',
              lineHeight: 1.55,
            }}
          >
            <p style={{ margin: '0 0 10px 0' }}>
              Ayon sa <strong>City Ordinance No. 2023-014</strong> (Ecological Solid Waste Management) at <strong>Barangay Ordinance No. 04, S-2023</strong> ng Aduas Centro, mahigpit na ipinagbabawal ang open burning o pagsusunog ng anumang uri ng basura at tuyong dahon.
            </p>

            <div style={{ margin: '10px 0', padding: '10px 14px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '4px', fontSize: '12px' }}>
                MGA NAKATAKDANG MULTA:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '13px' }}>
                <div>• <strong>Unang Paglabag:</strong> ₱1,000.00 multa</div>
                <div>• <strong>Ikalawang Paglabag:</strong> ₱2,500.00 multa</div>
                <div>• <strong>Ikatlong Paglabag:</strong> ₱5,000.00 multa o 30 araw na community service</div>
              </div>
            </div>

            {/* Citations badges */}
            <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--fg-faint)', fontWeight: 600 }}>Batayan:</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                📄 City Ord. No. 2023-014 §7
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: 'var(--accent-gold)',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                📜 Brgy. Ord. No. 04, S-2023 §4
              </span>
            </div>

            <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--fg-faint)', fontStyle: 'italic' }}>
              Protektadong AI: Sumasagot lamang batay sa mga nai-upload at naaprubahang ordinansa ng Lungsod.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
