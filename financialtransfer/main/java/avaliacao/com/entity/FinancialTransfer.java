package avaliacao.com.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "tb_financial_transfer")
public class FinancialTransfer {

    @Id
    @SequenceGenerator(name = "financial_transfer_id_seq", sequenceName = "financial_transfer_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "financial_transfer_id_seq")
    private Long id;
    private String sourceAccount;
    private String targetAccount;
    private BigDecimal transferAmount;
    private BigDecimal rate;
    private LocalDate transferDate;
    private LocalDate appointmentDate;

}
