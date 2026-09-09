دابا خاصنا نربطوها بالـ Menu

بدلي:

case 4:
    console.log("Annuler un ticket");
    break;

بـ:

case 4:
    annulerTicket();
    break;
كيفاش كتخدم؟

مثلاً عندك:

Ticket #1
Passager : SARA
Trajet ID : 20
Place : 1
Prix : 95 DH

وتختاري:

Votre choix : 4
Identifiant du ticket : 1

غادي يحيد Ticket #1 من tickets ويرجع بلاصة وحدة للرحلة 20.

وفي الأخير:

Ticket annulé avec succès.

⚠️ ملاحظة صغيرة: tickets.splice(index, 1) كتحيد التذكرة فعلاً، ولكن من بعد غادي نحتاجو ننتبهو لموضوع Ticket ID unique ملي نديرو تذاكر جديدة.
