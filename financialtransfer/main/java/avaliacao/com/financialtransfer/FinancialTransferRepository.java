package avaliacao.com.financialtransfer;

import avaliacao.com.entity.FinancialTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancialTransferRepository extends JpaRepository<FinancialTransfer, Long> {

    }
