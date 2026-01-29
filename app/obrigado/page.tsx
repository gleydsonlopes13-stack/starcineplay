export default function ObrigadoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "44px 18px",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Helvetica Neue"',
        background:
          "radial-gradient(900px 400px at 50% 12%, rgba(255,215,0,.18), transparent 60%), radial-gradient(1000px 600px at 20% 60%, rgba(255,0,0,.14), transparent 65%), linear-gradient(180deg, #520000, #8b0000)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 820,
          borderRadius: 28,
          padding: 1,
          background:
            "linear-gradient(135deg, rgba(255,215,0,.65), rgba(255,215,0,.15), rgba(255,255,255,.06))",
          boxShadow: "0 35px 90px rgba(0,0,0,.75)",
        }}
      >
        <div
          style={{
            borderRadius: 27,
            padding: 34,
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(255,215,0,.10), transparent 55%), linear-gradient(180deg, rgba(18,18,18,1), rgba(10,10,10,1))",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <img
                src="/logo-starcine.png"
                alt="Starcine Play"
                style={{ height: 34, width: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 18,
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(46, 204, 113, .12)",
              border: "1px solid rgba(46, 204, 113, .35)",
              color: "#c9f7dd",
              fontWeight: 800,
              letterSpacing: 0.6,
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            ✅ Pagamento confirmado
          </div>

          {/* Title */}
          <h1
            style={{
              marginTop: 16,
              marginBottom: 10,
              fontSize: 34,
              fontWeight: 950,
              letterSpacing: 1.2,
              color: "#FFD700",
              textTransform: "uppercase",
              lineHeight: 1.15,
              textShadow: "0 10px 24px rgba(0,0,0,.35)",
            }}
          >
            Bem-vindo à Starcine Play
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 620,
              fontSize: 16.5,
              lineHeight: 1.7,
              opacity: 0.92,
            }}
          >
            Obrigado pela confiança. Seu acesso está sendo preparado agora.
            <br />
            Se quiser acelerar, chame no WhatsApp e a gente finaliza com prioridade.
          </p>

          {/* Steps */}
          <div
            style={{
              marginTop: 22,
              textAlign: "left",
              borderRadius: 18,
              padding: 18,
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: "10px 10px",
                borderRadius: 14,
                background: "rgba(0,0,0,.18)",
                border: "1px solid rgba(255,215,0,.08)",
              }}
            >
              <span style={{ fontSize: 18 }}>👉</span>
              <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.95 }}>
                Se você <strong>já entrou em contato</strong>, fica tranquilo(a):
                nossa equipe já está cuidando da sua liberação.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                marginTop: 12,
                padding: "10px 10px",
                borderRadius: 14,
                background: "rgba(0,0,0,.18)",
                border: "1px solid rgba(255,215,0,.08)",
              }}
            >
              <span style={{ fontSize: 18 }}>⚡</span>
              <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.95 }}>
                Se ainda não chamou, clique no botão abaixo para{" "}
                <strong>atendimento imediato</strong>.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5511970905736?text=Oi!%20Acabei%20de%20comprar%20na%20Starcine%20Play%20e%20quero%20liberar%20meu%20acesso%20🙂"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 22,
              padding: "16px 26px",
              borderRadius: 16,
              textDecoration: "none",
              fontWeight: 950,
              letterSpacing: 0.6,
              color: "#08130b",
              background:
                "linear-gradient(180deg, #3cff7a 0%, #22c55e 55%, #16a34a 100%)",
              boxShadow:
                "0 16px 40px rgba(34,197,94,.25), 0 2px 0 rgba(255,255,255,.2) inset",
            }}
          >
            💬 CHAMAR NO WHATSAPP AGORA
          </a>

          {/* Footer */}
          <p style={{ marginTop: 18, opacity: 0.72, fontSize: 13.5 }}>
            ⚠️ Mantenha esta página aberta. Seu acesso será finalizado em instantes.
          </p>
        </div>
      </div>
    </main>
  );
}
