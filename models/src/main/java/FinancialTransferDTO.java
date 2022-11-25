import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class FinancialTransferDTO {

    private String id;
    private String sourceAccount;
    private String targetAccount;
    private BigDecimal rate;
    private LocalDate transferDate;
    private LocalDate appointmentDate;

}
